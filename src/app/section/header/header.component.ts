import { Component, OnInit } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService){}

  ngOnInit(): void {
  }
 /* changeLang() {
    console.warn(lang);
    this.translate.setDefaultLang(lang);

    this.translate.use(lang);
  }*/

  changeLang(lang: string) {
    console.warn(lang);
    this.translate.setDefaultLang(lang);

    this.translate.use(lang);
  }

}
