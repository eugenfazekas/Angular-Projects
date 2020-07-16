import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-demo';

   constructor( private _InteractionService: InteractionService) {}

   greetStudent() {
this._InteractionService.sendMessage('Good Morning');
   }

   appreciateStudent() {
    this._InteractionService.sendMessage('Well Done');
   }

  }

