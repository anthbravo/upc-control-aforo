import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'upc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  user: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formGroupLogin = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  eventEnter() {
    this.user = this.formGroupLogin.value;
    this.router.navigateByUrl('welcome');
  }
}
