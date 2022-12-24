import { Component, OnInit } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public translate: TranslateService){}

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    console.warn(lang);
    this.translate.setDefaultLang(lang);

    this.translate.use(lang);
  }

}
