import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckTelephoneService } from '../services/check-telephone.service';

@Directive({
  selector: '[uniqueTelephone]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueTelephoneValidatorDirective, multi: true }]

})
export class UniqueTelephoneValidatorDirective implements AsyncValidator {

  constructor(private checkTelephone: CheckTelephoneService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.checkTelephone.checkUniqueTelephone(c.value).pipe(
      map((res: any) => {
        return res.status === 400 ? { 'uniqueTelephone': true } : null
      })
    )
  }

}
