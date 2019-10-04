import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatTableDataSource } from '@angular/material';

export interface Tasks {
  id: String;
  task: String;
  status: Number;
  created_at: Number;
}

export interface Friend {
  id: String;
  name: String;
  email: String;
  contactNo: String;
  created_at: Number;
}

export interface Artists {
  id: String;
  name: String;
  bio: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  
  dataSource: MatTableDataSource<Tasks>;
  friendsDataSource: MatTableDataSource<Friend>;
  artistsDataSource: MatTableDataSource<Artists>;

  displayedColumns: string[] = ['id', 'task', 'status','created_at'];
  displayedColumns2: string[] = ['id', 'name', 'email','contactNo', 'created_at'];
  displayedColumns3: string[] = ['id', 'name', 'bio'];
  
  constructor(private svc: AppService){}

  ngOnInit(){
    this.svc.getAllTasks().then(result=>{
      let arr= [];
      result.forEach((data)=>{
        arr.push({id: data[0], task: data[1], status: data[2], created_at: data[3] })
      })
      this.dataSource = new MatTableDataSource(arr);
    });

    this.svc.getAllFriends().then(result=>{
      let friendsArr= [];
      result.forEach((data)=>{
        friendsArr.push({id: data.id, name: data.name, email: data.email, contactNo: data.contactNo, created_at: data.createdAt })
      })
      this.friendsDataSource = new MatTableDataSource(friendsArr);
    });

    this.svc.getAllArtists().then(result=>{
      let artistsArr= [];
      result.forEach((data)=>{
        artistsArr.push({id: data.id, name: data.name, bio: data.bio })
      })
      this.artistsDataSource = new MatTableDataSource(artistsArr);
    });
  }
}
