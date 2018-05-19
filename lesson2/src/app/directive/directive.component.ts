import { Component } from "@angular/core";

@Component({
    selector: 'app-directive',
    templateUrl: 'directive.component.html',
    styleUrls: ['directive.component.css']
})

export class DirectiveComponent{
    public title = "Learn about directives";
    public showElement = true;
    public color = 'blue';
    public colors = ['red', 'blue', 'green'];
    public cone = true;
    public ctwo=true;
    public style='italic';
    public size ='30px';

    toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}