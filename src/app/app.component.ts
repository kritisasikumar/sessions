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
    
    // var headers = new Headers();
    // headers.append('authorizationToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTFkMmM2NGE3YWE5MWNhNDFiMWYwNiIsImlhdCI6MTY1NDg2MjkxMSwiZXhwIjoxNjU0ODY2NTExfQ.MVETur-TFJeQJtEx6LHIrTsN294UJW8tTFke9dPRRw0');
        
    // this.http.post('https://9qbfkwvx69.execute-api.ap-south-1.amazonaws.com/dev/user/create',data)
    // .subscribe((result:any)=>{
    //   const token = result
    //   console.log(token)
    //   sessionStorage.setItem('token', JSON.stringify(result.token));
    // })

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
  
    
        
    // this.http.get<any>('https://9qbfkwvx69.execute-api.ap-south-1.amazonaws.com/dev/users',{headers})
    // .subscribe((result:any)=>{
    //   console.log(result)
    //   const token = result
    //   console.log(token)
    //   sessionStorage.setItem('token', JSON.stringify(result.token));
    // })
 
}
