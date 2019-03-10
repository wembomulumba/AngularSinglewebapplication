import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

   // URL to retrieve the data
   API_URL = 'http://localhost:3000/news/all/';
   currentArticle: any;

   // tslint:disable-next-line:no-trailing-whitespace
   constructor(private http: HttpClient) { 
        this.http.get(this.API_URL);
   }
  // http get to retrieve data
   getNotes() {
    return this.http.get(this.API_URL);
   }
}
