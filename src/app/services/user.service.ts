import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl:string='http://localhost:3001/user';
  constructor(private httpClientUser:HttpClient) { }

  addUser(user:any,avatar:File)
  {
    let formData = new FormData ;
    formData.append('firstName',user.firstName);
    formData.append('lastName',user.lastName);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('confirmPwd',user.confirmPwd);
    formData.append('role',user.role);
    formData.append('avatar',avatar);

    return this.httpClientUser.post<{message:string}>(`${this.userUrl}/signup`,formData)
  };

  userLogin(user:any)

  {
     console.log('user into service',user);
      return this.httpClientUser.post<{message:string,user:any}>(`${this.userUrl}/login`,user);
  }
  

  
}
