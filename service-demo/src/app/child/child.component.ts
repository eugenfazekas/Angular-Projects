import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _InteractionService: InteractionService) { }

  ngOnInit(): void {
    this._InteractionService.teacherMessage$.subscribe(
      message => {
        if (message === 'Good Morning') {
          alert('Good Morning Teacher');
        }else if(message === 'Well Done'){
          alert('Thank you teacher');
        }
      } 
    );
  }

}
