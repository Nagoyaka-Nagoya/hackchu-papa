import { Component } from '@angular/core';
import { ArticleService } from "./article.service";
import { Article } from "./article";

@Component({
  selector: 'hc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  private articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
      this.articleService.getArticles().subscribe(
        articles => this.articles = articles,
      );
  }

  title = 'ほげほげふわふわ';


}
