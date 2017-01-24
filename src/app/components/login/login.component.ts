import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {Observable} from 'rxjs';
import {emailValidator, confirmPasswordValidator} from './CustomValidators';

@Component({
    selector: 'login',
    templateUrl: './login.view.html',
    styleUrls: ['./login.style.scss'],
    providers: [MdSnackBar]
})
export class LoginComponent {
    loginForm : FormGroup;
    isSubmitting: boolean = false;
    private snackBarDuration = 2000;

    constructor(formBuilder: FormBuilder, private snackBar: MdSnackBar) {
        this.loginForm = formBuilder.group({
                email : ['', Validators.compose([Validators.required, emailValidator])],
                password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
                confirmedPassword : ['', Validators.compose([Validators.required, Validators.minLength(6)])]
            },
            {
                validator: confirmPasswordValidator('password', 'confirmedPassword')
            })
    }

    onSubmit(formValue){
        console.log(formValue);
        this.isSubmitting = true;
        Observable.timer(1000).subscribe(() => {
            this.isSubmitting = false;
            this.snackBar.open('Login successful!', 'CLOSE', {duration: this.snackBarDuration});
        });
    }
}
