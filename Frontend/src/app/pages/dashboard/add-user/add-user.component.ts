import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  navActive = 'add-user'
  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });



  }

  get Mail() {
    return this.addUserForm.get('email');
  }

  get Name() {
    return this.addUserForm.get('name');
  }

  get LastName() {
    return this.addUserForm.get('lastname');
  }

  get Password() {
    return this.addUserForm.get('password');
  }

  get Role() {
    return this.addUserForm.get('role');
  }



  enviar(event: Event) {
    event.preventDefault;
    console.log(this.addUserForm.value);

    if (this.addUserForm.valid) {
      console.log(this.addUserForm.value);
    }
    else {
      console.log('Invalid Form');
      this.addUserForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {

  }
}
