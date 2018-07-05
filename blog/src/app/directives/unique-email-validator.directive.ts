import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckEmailService } from '../services/check-email.service';

@Directive({
  selector: '[uniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {

  constructor(private checkEmail: CheckEmailService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.checkEmail.checkUniqueEmail(c.value).pipe(
      map((res: any) => {
        console.log(c.value);
        console.log(res);
        return res.status === 400 ? { 'uniqueEmail': true } : null
        // return res && res.length > 0? { 'uniqueEmail': true } : null
      })
    )
  }

}
