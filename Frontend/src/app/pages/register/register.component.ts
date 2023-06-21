import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  createUserForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private snackBar: MatSnackBar
    )
    {
      this.createUserForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],

      });

     }

      get username() {
        return this.createUserForm.get('username')
      }

      get email() {
        return this.createUserForm.get('email')
      }

      get password() {
        return this.createUserForm.get('password')
      }

      get first_name() {
        return this.createUserForm.get('first_name')
      }

      get last_name() {
        return this.createUserForm.get('last_name')
      }

      createUser() {
        if (this.createUserForm.valid) {
          const user = this.createUserForm.value;
          this.usersService.createUser(user)
            .pipe(
              catchError((err) => {
                this.snackBar.open(err.error.message, 'Cerrar', {
                  duration: 3000,
                  horizontalPosition: 'end',
                  verticalPosition: 'bottom',
                  panelClass: 'error-snackbar'
                });
                return of(err);
              })
            )
            .subscribe(
              (res) => {
                this.router.navigate(['/login']);
                this.snackBar.open('Usuario creado con éxito', 'Cerrar', {
                  duration: 3000,
                  horizontalPosition: 'end',
                  verticalPosition: 'bottom',
                  panelClass: 'success-snackbar'
                });
              }
            );
        } else {
          // Mostrar mensaje de error o realizar alguna acción adicional
          this.snackBar.open('Por favor, complete todos los campos obligatorios', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: 'error-snackbar'
          });
        }
      }

      hasError(controlName: string, errorName: string) {
        const control = this.createUserForm.get(controlName);
        return control?.touched && control?.hasError(errorName);
      }

      getErrorMessage(controlName: string, errorName: string) {
        const control = this.createUserForm.get(controlName);
        return control?.touched && control?.hasError(errorName) ? control?.getError(errorName) : '';
      }



}
