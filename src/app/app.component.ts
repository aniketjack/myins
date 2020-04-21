import { Component } from '@angular/core';
import { WaitingLoaderService } from './utilities/waiting-loader.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private router: Router,
    private http: HttpClient ) {
      
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

    // http post request
    //https://slixueelx1.execute-api.us-east-1.amazonaws.com/Beta
    let content = JSON.stringify({isPaymentGateway: true});
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': 'sarthi1' });
  let options = { headers: headers };
    //headers.append('', 'sarthi1');
   // headers = headers.append('content')
    this.http.post("https://slixueelx1.execute-api.us-east-1.amazonaws.com/Beta", content,options).subscribe(res=>{
      console.log("Lex response >>> ", res);
    },err=>{
      console.log("Error in API")
    })

  }

}
