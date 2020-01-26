import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdowndirective]'
})
export class DropdowndirectiveDirective implements OnInit {
  // The below line signifies that everytimes the isOpen changes, the class.open is attached

  @HostBinding('class.open') isOpen:boolean=false;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { 
  }

  ngOnInit(){
    
  }

// Also if u want the dropdown to close on clicking of any other place in the page there is a hack as below
  @HostListener('document:click',['$event']) toggleOpen(event:Event) {
    debugger;
    // this.isOpen=!this.isOpen;
    // if(!this.isOpen)
    //   this.renderer.addClass(this.elRef.nativeElement,'open');
    // else
    //   this.renderer.removeClass(this.elRef.nativeElement,'open');
    this.isOpen=this.elRef.nativeElement.contains(event.target)?!this.isOpen:false;
    }



}
