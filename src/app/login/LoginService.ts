import {Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

loginStatus: boolean = false;

getLoginStatus()
{
    return this.loginStatus;
}

 makeLogin(username: string , password: string)
{
if(username !=null && password !=null)
{
    this.loginStatus = true;
    return true;
}
else{
    return false;
}
};

}