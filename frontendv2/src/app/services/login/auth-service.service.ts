import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { Admin } from 'src/app/model/admin/admin';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
 
export class AuthServiceService {
   
  baseUrl = 'http://spring-service-phase-3.apps.eu410.prod.nextcle.com'+'/app/admin';
  constructor(private httpClient:HttpClient,private router:Router) { }

 
  registerUser(user: any)
  {
    this.httpClient.post('http://spring-service-phase-3.apps.eu410.prod.nextcle.com'+'/app/admin/signup',user).subscribe(res=>{
      console.log(res);
    })
  }

  loginUser2(user: any){
    this.httpClient.post('http://spring-service-phase-3.apps.eu410.prod.nextcle.com'+'/app/admin/signin',user).subscribe(res=>{
      console.log(res);
    })
  }

  adminbypass() {
    this.httpClient.get('http://spring-service-phase-3.apps.eu410.prod.nextcle.com'+'/app/admin/adminbypass').subscribe(res=>{
      console.log(res);
    })

  }
  adminbyemail(){
    return this.httpClient.get('http://spring-service-phase-3.apps.eu410.prod.nextcle.com'+'/app/admin/adminbyemail');
  }




}
