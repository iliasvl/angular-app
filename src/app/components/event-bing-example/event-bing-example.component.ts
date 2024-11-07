import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bing-example',
  standalone: true,
  imports: [],
  templateUrl: './event-bing-example.component.html',
  styleUrl: './event-bing-example.component.css'
})
export class EventBingExampleComponent {
    times: number = 0;
    userInput: string = '';

    incrementTimes(){
        this.times++;
    }

    decrementTimes(){
        this.times--;
    }

    resetTimes(){
        this.times=0
    }

    onUserInput(event: Event){
        // console.log(event);
        this.userInput = (event.target as HTMLInputElement).value;
    }
}