import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';



@Injectable()
export class SearchService {
  readonly KEY : String = "AIzaSyB3d2GinkHEkO-BTEKGSzdTHbcvfi5j0Jc";
  readonly BASE_URL : String = "https://www.googleapis.com/youtube/v3/search";

  constructor(private http:Http) { }

  get(query:String){
    return this.http.get(`${this.BASE_URL}?q=${query}&part=snippet&key=${this.KEY}`)
      .map(res=>res.json())
      .map(videos => videos.items);
  }

}
