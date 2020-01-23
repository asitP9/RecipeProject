import { Component, OnInit, ViewEncapsulation, DoCheck, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
  
})
export class HeaderComponent implements OnInit, OnDestroy {
  // clickedItem:string;
  // @Output() clickedItem=new EventEmitter<string>();
  isAuthenticated:boolean=false;
  userSubscription:Subscription;
  constructor(private dataStorageService:DataStorageService, private authService:AuthService, private route:ActivatedRoute, private router:Router) {
   }


   saveAllData(){
      this.dataStorageService.savingRecipe();
   }
   
   fetchAllData(){
      this.dataStorageService.fetchingAllRecipe().subscribe();
      
   }
  ngOnInit() {
    
    this.userSubscription=this.authService.user.subscribe(
      data=>{
        this.isAuthenticated=!!data;
      }
    )

  }
 
  logoutFromApp(){
    this.authService.logout();
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
