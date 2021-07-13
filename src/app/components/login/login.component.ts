import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {

      loginForm: FormGroup;
      message : any;

      constructor(private formBuilder :FormBuilder, private loginRouter:Router,
        private userService:UserService) {}
    

      ngOnInit()
       {
        this.loginForm=this.formBuilder.group({
            firstName:['',[Validators.minLength(3),Validators.required]],
            lastName:['',[Validators.minLength(5),Validators.required]],
            email:['',[Validators.email,Validators.required]],
            password:['',[Validators.minLength(8),Validators.required]],
            confirmPwd:['',[Validators.minLength(8),Validators.required]]
          })
       }
//traitement static objects with LocalStorage:
      // onClickLogin(loginFormValue:any)
      // {
      //   let usersIdentified=JSON.parse(localStorage.getItem("usersIdentified")||"[]");
      //   let idUser=JSON.parse(localStorage.getItem("idUser")||"1");
      //   loginFormValue.id=idUser;
      //   usersIdentified.push(loginFormValue);
      //   localStorage.setItem("usersIdentified",JSON.stringify(usersIdentified));
      //   localStorage.setItem("idUser",idUser+1);
      //   this.loginRouter.navigate(['']);
      // }
    
      userLogin(user:any)
      {
        console.log('Here user is:',user);
        this.userService.userLogin(user).subscribe(
          (data)=>
          {
                console.log('here my data from BE:',data.message);
                if(data.message == '2')
                {
                  //traitement if user connected with success
                  if(data.user.role =='admin')
                  {
                      this.loginRouter.navigate(['admin']);
                  }
                  else
                  {
                    this.loginRouter.navigate(['']);
                  }
                }
                else
                {
                  //traitement if email/password invalid
                  // document.getElementById('errorMsg').innerHTML='Email/password invalid';
                  // document.getElementById('errorMsg').style.color='
                  this.message='Email/password invalid';
                }

          }

        )
      }



  }
