import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl): {[key: string]: any} | null {
      let firstNameValue = control.root.get('firstName')?.value;
      let lastNameValue = control.root.get('firstName')?.value;
      let forbiddenPassword = (control.value.includes(firstNameValue)) || (control.value.includes(lastNameValue));
      return forbiddenPassword ? {'invalidPassword': {value: control.value}} : null;
    }
