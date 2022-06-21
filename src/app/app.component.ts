import { Component } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  

  constructor(private http:HttpClient){
    
         
  }
  onSubmit(data: any){
    // data.sum=(data.firstName*data.lastName)
    // console.log(data.sum);
    
    this.http.post('https://49yewrmj8f.execute-api.ap-south-1.amazonaws.com/dev/user/create',data)
    .subscribe((result:any)=>{
      const token = result
      console.log(token)
      sessionStorage.setItem('token', JSON.stringify(result.token));
    })

  }  
  onLogin(data: any){

    this.http.post('https://49yewrmj8f.execute-api.ap-south-1.amazonaws.com/dev/user/login',data)
    .subscribe((result:any)=>{
      const token = result
      console.log(token)
      sessionStorage.setItem('token', JSON.stringify(result.token));
    })

  }  
  getData(){
    // console.log(sessionStorage.getItem('token'));
   
    var ses=sessionStorage.getItem('token')!;
    console.log(ses)
    const headers = { 'authorizationToken': ses}
    this.http.get<any>('https://49yewrmj8f.execute-api.ap-south-1.amazonaws.com/dev/users', { headers }).subscribe(result => {
        console.log(result)
    })
    
  }

  Update(){
    var ses=sessionStorage.getItem('token')!;
    const headers = { 'authorizationToken': ses}
    this.http.put('https://49yewrmj8f.execute-api.ap-south-1.amazonaws.com/dev/user/{id}', { headers }).subscribe(result => {
        console.log(result)
    })

  }
 Delete(){
  var ses=sessionStorage.getItem('token')!;
    const headers = { 'authorizationToken': ses}
    this.http.delete('https://49yewrmj8f.execute-api.ap-south-1.amazonaws.com/dev/user/{id}', { headers }).subscribe(result => {
        console.log(result)
    })
 }
}
