import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  public profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9. _%+-]+@[a-z0-9. -]+\.[a-z]{2,4}$/)]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/)]],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
    })
  }
  onSubmit() {

    if (this.profileForm.valid) {
      console.log("valid", this.profileForm.value);
      alert("Registered successfully")
    }
    else {
      console.error("errors")
    }
    this.profileForm.reset()
  }

}
