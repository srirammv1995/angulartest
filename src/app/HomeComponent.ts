import { Component } from '@angular/core';
import { LoginService } from './login/LoginService';

@Component({selector: 'homeComp',
templateUrl: 'HomeComponent.html'
})
export class HomeComponent{

    constructor(private loginService:LoginService)
    {

    }

    loginStatus = false;

    username = "";

    password = "";

    onSubmit(){
        this.loginStatus = this.loginService.makeLogin(this.username,this.password);
        console.log(this.loginStatus)
    }
    
}