import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'bc-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: string;
  
  constructor(private fb: FormBuilder,
            private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    this.form = this.fb.group(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=^.{8,}$)[a-zA-Z][a-zA-Z0-9]/)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9]{8,}/)
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9]{8,}/)
        ])
      }
    )
  }
  register() {
    if (this.form.invalid) {
      return;
    }
    this.authenticationService.register(this.form.value).subscribe(
      (response) => { this.message = response.payload.message },
      (err) => {console.log(err);
      }
    );
  }
}
