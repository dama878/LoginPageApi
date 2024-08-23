import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { response } from 'express';
import { error } from 'console';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  submitted=false;
  errorMessage : string[] =[];

  constructor(private accountService: AccountService,
              private formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['',[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    })
  }
  
  register(){
    this.errorMessage =[];
    this.submitted=true
    
    if(this.registerForm.valid) {
      this.accountService.register(this.registerForm.value).subscribe({
        next:(response) =>{
          console.log(response)
        },
        error: error => {
          console.log(error)
        }
      })
      console.log(this.registerForm.value);
    }
  }

}
