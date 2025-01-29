import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginUser, RegisterUser, ReturnLoginUser } from './model/model';
import { FormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';
import { NgIf } from '@angular/common';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NgIf,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Bus-Booking';
  isLoginForm:boolean=true;
  masterService = inject(MasterService);
  connectedUserName:string='';
  // router=inject(Router);

  loginMode:boolean=true;
  someOneIsLoggedIn:boolean=false;

  loggedUserData:LoginUser ={
    "userName" : "",
    "email" : "",
    "password" : "",
    "bookings":[]
  }

  registerUserObj:RegisterUser = {
    "userId" : 0,
    "userName" : "",
    "email" : "",
    "fullName" : "",
    "role" : "",
    "createdDate" : new Date(),
    "password" : ""
  } 

  loginUserObj : LoginUser = {
    "email":'',
    "password":'',
    "userName":'',
    "bookings":[]
  }
  ngOnInit(){
    const localUserConnected=localStorage.getItem('currentUser');
    if(localUserConnected!=null){
      this.loggedUserData=JSON.parse(localUserConnected);
      this.someOneIsLoggedIn=true;
    }
  }


  openModel(){
    const model=document.getElementById("myModal");
    if(model!=null){
      model.style.display='block';
    }
  }

  closeModel(){
    const model=document.getElementById("myModal");
    if(model!=null){
      model.style.display='none';
    }
  }


  onRegister(){
    this.masterService.onRegisterUser(this.registerUserObj);
    alert('Inscriptions réussite !')
    this.closeModel();
    this.registerUserObj.email='';
    this.registerUserObj.userName='';
    this.registerUserObj.fullName='';
    this.registerUserObj.password='';
  }

  onLogin() : void{
    const returnLoginUser=this.masterService.onLogin(this.loginUserObj);
    if(returnLoginUser.result){
      this.loginUserObj.userName=returnLoginUser.userName;
      this.connectedUserName=returnLoginUser.userName;
      localStorage.setItem('currentUser',JSON.stringify(this.loginUserObj))
      this.someOneIsLoggedIn=true;
      this.closeModel();
    }else{
      alert('informations erronées!!');
    }

  }

  logoff(){
    localStorage.removeItem('currentUser');
    this.someOneIsLoggedIn=false;
  }

}
