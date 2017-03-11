import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { Article } from "./article";


@Injectable()
export class ArticleService {

  constructor (private http: Http) {}

  // private url = 'http://13.112.121.70:7700/dataspider/trigger/path';
  private url = 'http://dev.api.pittankopta.net/hackchu/';

  getArticles (): Observable<Article[]> {
    return this.http.get(this.url)
      .map(this.extractData);
  }

  // レスポンスデータの整形処理
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || [];
  }

  // エラー処理
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
