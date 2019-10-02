import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  tasks: any = [];
  constructor(private svc: AppService){

  }

  ngOnInit(){
    console.log("page init loaded...");
    this.svc.getAllTasks().then(result=>{
      console.log(result)
      this.tasks = result;
    })
  }
}
