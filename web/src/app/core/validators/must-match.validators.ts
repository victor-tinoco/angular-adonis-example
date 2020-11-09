import { FormGroup } from '@angular/forms';

/**
 * Custom validator (for forms) to check if two fields match
 *
 * The parameter `whatNeedMustMatch` is for help error services to provide a dynamic error message.
 *
 * Example on `main module > services > validationErrorService`
 *
 * @usageNotes
 *
 * ### Example of correctly usage
 *
 * ```
 * MustMatch('password', 'confirmPassword', 'The passwords')
 * ```
 */
export function MustMatch(controlName: string, matchingControlName: string, whatMustMatch: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
                mustMatch: {
                    whatMustMatch: whatMustMatch || 'Os campos'
                }
            });
        } else {
            matchingControl.setErrors(null);
        }
    }
}