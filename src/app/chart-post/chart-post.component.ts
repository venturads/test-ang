import { Component, OnInit } from '@angular/core';
import { ChartPostService } from './chart-post.service';

@Component({
  selector: 'app-chart-post',
  templateUrl: './chart-post.component.html',
  styleUrls: ['./chart-post.component.css']
})
export class ChartPostComponent implements OnInit {
  client$
   title = 'app';
   constructor(private clientService: ChartPostService){}
 
   fetchClient(){
     if(this.client$ == null){}
     this.client$ = this.clientService.fetchClient();
   }

   ngOnInit(){
     
   }
  }