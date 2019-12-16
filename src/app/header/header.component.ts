import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // clickedItem:string;
  @Output() clickedItem=new EventEmitter<string>();
  constructor() {
   }

  ngOnInit() {
    this.clickedItem.emit("recipe");

  }
  navigationClicked(listItem:string){
    
    this.clickedItem.emit(listItem);
      // if(listItem==="recipe"){

      // }
      // else{

      // }
  }
}
