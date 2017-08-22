import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
    @Input() actionBtnMessage: string;
    @Input() errorMessage: string;
    @Output() action =  new EventEmitter();

    constructor() { }

  ngOnInit() {
  }


  doAction(){
      this.action.emit();
  }
}
