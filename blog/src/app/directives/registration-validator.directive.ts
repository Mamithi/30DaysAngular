import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RegistrationValidatorDirective, multi: true }]
})
export class RegistrationValidatorDirective implements Validator {
  @Input('compare') passwordValueToCompare: string;

  validate(pwd: AbstractControl): ValidationErrors | null {
    if(pwd.value === null || pwd.value.length === 0){
      return null;
    }

    const passwordToCompare = pwd.root.get(this.passwordValueToCompare);
    if (passwordToCompare) {
      const subscription: Subscription = passwordToCompare.valueChanges.subscribe(() => {
        pwd.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }

    return passwordToCompare && passwordToCompare.value !== pwd.value ? { 'compare': true } : null;
  }



}
