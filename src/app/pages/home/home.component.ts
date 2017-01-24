import {Component} from '@angular/core';
import {LocalizeRouterService} from 'localize-router';

@Component({
    selector: 'home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.style.scss']
})
export class HomeComponent {
  constructor(private localize: LocalizeRouterService) {

  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
