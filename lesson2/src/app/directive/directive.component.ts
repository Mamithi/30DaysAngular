import { Component } from "@angular/core";

@Component({
    selector: 'app-directive',
    templateUrl: 'directive.component.html'
})

export class DirectiveComponent{
    public title = "Learn about directives";
    public showElement = true;
    public color = 'blue';
    public colors = ['red', 'blue', 'green'];
}