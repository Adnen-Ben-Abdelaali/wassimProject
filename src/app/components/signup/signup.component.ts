import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup
  userDynaUrl : any =this.router.url;
  previewAvatar: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }
  
  ngOnInit() {
    this.signUpForm = this.formBuilder.group
      ({
        firstName: ['', [Validators.minLength(3), Validators.required]],
        lastName: ['', [Validators.minLength(5), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(8), Validators.required]],
        confirmPwd: [''],
        avatar: [null]
      },
        {
          validator: MustMatch('password', 'confirmPwd')
        }
      );
  }

  signup(user) {

    console.log('here my user', user);

    // switch (this.userUrl) {
    //   case ('/signup'):
    //     user.role = 'simpleUser';
    //     break;

    //   case ('signup-admin'):
    //     user.role = 'admin';
    //     break;
    //   default:
    //     console.log('No such signup exists');
    //     break;
    // }

    if (this.userDynaUrl == '/signup') {
      user.role = 'simpleUser';
    } else {
      user.role = 'admin';
    }


    // user.role ='simpleUser' ? (this.userDynaUrl=="/signup"):'admin';

    this.userService.addUser(user, this.signUpForm.value.avatar).subscribe(
      (result) => {
        console.log('here data after signup From BE', result.message);
      }
    )
  }

  onAvatarSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('here my file', file);
    this.signUpForm.patchValue({ avatar: file });//attribut à ajouter 
    this.signUpForm.get('avatar').updateValueAndValidity();// update Form (formulaire)
    const reader = new FileReader(); // lecteur d'image 57 au 62
    reader.onload = () => {
      this.previewAvatar = reader.result as string
    };
    reader.readAsDataURL(file);
  }


  /*---- Local Storage Manipulation----------------------------------*/
  // signUpUserRegister(formValue: any) {
  //   let users = JSON.parse(localStorage.getItem("users") || "[]");
  //   let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
  //   formValue.id = idUser;
  //   users.push(formValue);
  //   localStorage.setItem("users", JSON.stringify(users));
  //   localStorage.setItem("idUser", idUser + 1);
  //   this.router.navigate(['login']);
  // }
  /*--------------------------------------------------------------------*/
}
