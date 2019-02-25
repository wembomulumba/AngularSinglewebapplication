import {DataService} from './data.service';

import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'singlepageApplication';

  data: any;
  constructor(private newsService: DataService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNotes()
    .subscribe(data => {
        // console.log(data);
        this.data = data;
    });
  }


  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);

  }

}
