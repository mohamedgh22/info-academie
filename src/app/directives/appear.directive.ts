import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appear]'
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<void>;

  elementPos: number = 0;
  elementHeight: number = 0;

  scrollPos: number = 0;
  windowHeight: number = 0;

  subscriptionScroll: Subscription = new Subscription;
  subscriptionResize: Subscription = new Subscription;

  constructor(private element: ElementRef) {
      this.appear = new EventEmitter<void>();
  }

  saveDimensions() {
      this.elementPos = this.getOffsetTop(this.element.nativeElement);
      this.elementHeight = this.element.nativeElement.offsetHeight;
      this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
      this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any) {
      let offsetTop = element.offsetTop || 0;
      if (element.offsetParent) {
          offsetTop += this.getOffsetTop(element.offsetParent);
      }
      return offsetTop;
  }
  checkVisibility() {
      if (this.isVisible()) {
          // double check dimensions (due to async loaded contents, e.g. images)
          this.saveDimensions();
          if (this.isVisible()) {
              this.unsubscribe();
              this.appear.emit();
          }
      }
  }
  isVisible() {
      return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

  subscribe() {
      this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
          .subscribe(() => {
              this.saveScrollPos();
              this.checkVisibility();
          });
      this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
          .subscribe(() => {
              this.saveDimensions();
              this.checkVisibility();
          });
  }
  unsubscribe() {
      if (this.subscriptionScroll) {
          this.subscriptionScroll.unsubscribe();
      }
      if (this.subscriptionResize) {
          this.subscriptionResize.unsubscribe();
      }
  }

  ngAfterViewInit() {
      this.subscribe();
  }
  ngOnDestroy() {
      this.unsubscribe();
  }
}
