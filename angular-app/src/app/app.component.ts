import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatTableDataSource } from '@angular/material';

export interface Tasks {
  id: String;
  task: String;
  status: Number;
  created_at: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  dataSource: MatTableDataSource<Tasks>;
  displayedColumns: string[] = ['id', 'task', 'status','created_at'];

  constructor(private svc: AppService){

  }

  ngOnInit(){
    console.log("page init loaded...");
    
    this.svc.getAllTasks().then(result=>{
      console.log(result);
      let arr= [];
      result.forEach((data)=>{
        arr.push({id: data[0], task: data[1], status: data[2], created_at: data[3] })
      })
      this.dataSource = new MatTableDataSource(arr);
    });
  }
}
