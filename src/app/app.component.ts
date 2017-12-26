import { NewsMediaService } from './services/news-media.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  issues$: Observable<any[]>; 

  constructor(private newsMediaService:NewsMediaService) {
  }

  ngOnInit() {

    this.issues$ = this.newsMediaService.findAllIssues();

  }
}
