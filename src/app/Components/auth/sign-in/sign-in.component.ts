import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl:'./sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  readonly labels = {
    logoPath: '../../../../assets/logoapp.png'
  }

  loginForm: UntypedFormGroup;

  constructor(private readonly _formBuilder: UntypedFormBuilder, private readonly _router: Router){
    this.loginForm = this._formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login(): void{
    if(this.loginForm.value.email == 'admin' && this.loginForm.value.password == '1234'){
      this._router.navigate(['user-management'])
    }
  }
}
