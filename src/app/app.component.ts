import { Observable } from 'rxjs/Observable';
import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  searchBox$ : Subject<any> = new Subject<any>();
  video$ : Observable<any>;


  constructor(private searchService:SearchService){
    this.video$ = this.searchBox$
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(input => this.searchService.get(input));
  }

  ytLink(videoId : String){
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

}
