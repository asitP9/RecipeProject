import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message:string;
  @Output() closeComponent=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  closeModal(){
    this.closeComponent.emit();
  }
}
