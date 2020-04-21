import { Component } from '@angular/core';
import { WaitingLoaderService } from './utilities/waiting-loader.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var Instamojo:any;

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
  // Payment status
  _paymentFlgs = {
    isPymentSuccessful : false,
    isPymentFailed: false,
    isPaymentCancelled: false,
    paymentResponse:{}
  };
  
  //Instamojo = (<any>window['Instamojo']);
  //Instamojo = (<any>window['PaymentGateway']);

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
     // console.log("Window Variables >>>>> ", (<any>window)._paymentFlgs);
    
  }

  /********************************************************************************************************
   * doPayment()
   *********************************************************************************************************/
  doPayment(){

    let thisRef = this;
    let status = false, paymentResponse =  {};
          function onOpenHandler () {
            //alert('Payments Modal is Opened');
            console.log('Payment modal is getting open');
          } 

          function onCloseHandler () {
            if(status){
              this.sendFlagToBot({isPaymentSuccess: true, paymentDetails:  paymentResponse});
            }
            
          }

          function onPaymentSuccessHandler (response) {
             status = true;
             paymentResponse = response;
          }

          function onPaymentFailureHandler (response) {
            status = true;
            paymentResponse = response;
          }
          /* End client-defined Callback Handler Functions */

          /* Configuring Handlers */
        Instamojo.configure({
            handlers: {
              onOpen: onOpenHandler,
              onClose: onCloseHandler,
              onSuccess: onPaymentSuccessHandler,
              onFailure: onPaymentFailureHandler
            },
            directPaymentMode: 'credit card'
          });

          Instamojo.open('https://test.instamojo.com/@ackamthe');
          

  }


  /*********************************************************************************************************
   * Post Payment bot communication activity. To send a pyment gteway flag to bot
   * 
   *********************************************************************************************************/
  sendFlagToBot(obj){
    let content = JSON.stringify(obj);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': 'sarthi1' });
    let options = { headers: headers };
    this.http.post("https://slixueelx1.execute-api.us-east-1.amazonaws.com/Beta", content,options).subscribe(res=>{
        console.log("Beta API Response >>>> ", res);
      },err=>{
        console.log("Error in Beta API >>> ", JSON.stringify(err));
      })
  }
}
