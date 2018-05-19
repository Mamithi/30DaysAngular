import { Component } from "@angular/core";

@Component({
    selector: 'app-events',
    templateUrl: 'event.component.html',
    styleUrls: ['event.component.css']
})

export class EventComponet {
    public title = 'Learn Angular Events';


    onClick(value): void {
        console.log(value);
        // alert("Button Clicked");
    }

}