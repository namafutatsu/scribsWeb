import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  moduleId: module.id,
  selector: 'sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    public toast: ToastComponent
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Username: this.username,
      Mail: this.email,
      Password: this.password
    });
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.setMessage('You successfully registered!', 'success');
        this.router.navigate(['/login']);
      },
      error => this.toast.setMessage('Username or email already exists', 'danger')
    );
  }
}
