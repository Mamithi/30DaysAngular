import { Directive } from '@angular/core';
import { ValidTelephoneService } from '../services/valid-telephone.service';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[validTelephone]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ValidTelephoneValidatorDirective, multi: true }]

})
export class ValidTelephoneValidatorDirective implements AsyncValidator {

  constructor(private validPhone: ValidTelephoneService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.validPhone.validateTelephone(c.value).pipe(
      map((res: any) => {
        return res.status === 400 ? { 'validTelephone': true } : null
      })
    )
  }

}
