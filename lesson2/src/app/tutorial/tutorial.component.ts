import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    templateUrl: 'tutorial.component.html',
    styleUrls: ['tutorial.component.css']
    })

export class TutorialComponent {
    public title = "Tutorials Of Angular 2 Here";
    public applyClass = true;
    public applyRed = false;
    public imgLink ="http://thisismyworld.pe.hu/wp-content/uploads/2016/11/hello-world-banner.jpg";
}