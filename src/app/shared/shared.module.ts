import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceHolderDirective } from './place-holder/place-holder.directive'; 
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdowndirectiveDirective } from './dropdowndirective.directive';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    DropdowndirectiveDirective,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    AlertComponent

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdowndirectiveDirective,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    CommonModule
  ],
  entryComponents:[AlertComponent]

})
export class SharedModule { }
