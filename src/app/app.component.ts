import { Component } from '@angular/core';
import { WaitingLoaderService } from './utilities/waiting-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  showLoader: boolean;
  user:Object = {};
  isUserLoggedin: boolean = false;
  
  constructor(
    private waitingLoaderService: WaitingLoaderService,
    private router: Router ) {
      
  }

  ngOnInit() {
    // For Global waiting loader service
    this.waitingLoaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    this.router.events.subscribe((res) => {
      if (this.router.url === '/login' || this.router.url === '/signup') {
        this.isUserLoggedin = false
      } else {
        this.isUserLoggedin = true
      }
    })

  }

}
