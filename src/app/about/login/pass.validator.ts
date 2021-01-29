import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class RegexConstants {
    public static DECIMAL_6_4 = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
}

export function RegexValidator(reg: RegexConstants): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !control.value.toString().match(reg)) {
      return { decimal: true };
    }
    return null;
  };
  
}
