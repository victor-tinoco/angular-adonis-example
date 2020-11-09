import { ValidationErrors } from '@angular/forms';

export class ValidationErrorService {

  constructor() { }

  getErrorMessage(errors: ValidationErrors): string {
    if (errors['required']) return 'Este campo é obrigatório'
    if (errors['email']) return 'Insira um e-mail válido'
    if (errors['minlength']) return `No mínimo ${errors['minlength'].requiredLength} caracteres`
    if (errors['maxlength']) return `No máximo ${errors['maxlength'].requiredLength} caracteres`
    if (errors['mustMatch']) return `${errors['mustMatch'].whatMustMatch} precisam ser iguais`

    return 'Campo inválido'
  }
}
