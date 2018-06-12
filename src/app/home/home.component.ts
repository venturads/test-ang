import { Component, OnInit, Input } from '@angular/core';
import { ChartPostService } from '../chart-post/chart-post.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
    @Input() name: any;
    alive = true;
    public now: Date = new Date();
    
    constructor(private appTest : ChartPostService) {
      Observable.timer(0,5000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.appTest.fetchClient().subscribe(data=> {
          this.now = new Date();
          console.log(data[1].name + this.now.getSeconds());
        })
      });
    }
  
    ngOnDestroy(){
      this.alive = false; // switches your IntervalObservable off
    }
  }