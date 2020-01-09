import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
  
})
export class HeaderComponent implements OnInit {
  // clickedItem:string;
  // @Output() clickedItem=new EventEmitter<string>();
  constructor() {
   }

  ngOnInit() {
    // this.clickedItem.emit("recipe");

  }
  // navigationClicked(listItem:string){
    
  //   this.clickedItem.emit(listItem);
      
  // }
}
