import { Component } from "@angular/core";

@Component({
    selector: 'app-bind',
    templateUrl: '2bind.component.html'
})

export class BindComponent{
    public title = "Two way data binding";
    public firstname;
    public lastname;
}