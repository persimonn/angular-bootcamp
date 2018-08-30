import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
    static MatchPassword(control: AbstractControl) {
        const
        password = control.get('password').value,
        confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({matchPassword: true});
        } else {
            return null;
        }
    }
}