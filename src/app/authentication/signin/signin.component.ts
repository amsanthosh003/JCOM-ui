import { AuthService } from 'src/app/core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from "../../services/request.service";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../core/models/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  editForm: FormGroup;
  register: FormGroup;
  scrollBarHorizontal = window.innerWidth < 1200;
  Pincodes = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];

  // meetings = [
   
  //   { id: '1', value: 'Live' },
  //   { id: '2', value: 'Virtual' },
  //   { id: '3', value: 'Virtual International' },
  //   { id: '4', value: 'Association' },
  // ];

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  error2='';
  error1='';
  data: any;
 
  Meetings:any;
  loadingIndicator: boolean;
  filteredData: any;
  loader: boolean;
  disable: boolean;
  constructor(private request: RequestService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthService
  ) {

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  
  }
  ngOnInit() {
    this.viewdata();
 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      meeting_type:['', Validators.required]
    });
 
  }
  get f() {
    return this.loginForm.controls;
  }



viewdata(){
  this.fetch((data) => {
    this.data = data;
    // this.filteredData = data;
    this.Meetings=data;
    // this.filteredData=data.response;
   
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
}

fetch(cb) {

  this.request.getmeetingtype().subscribe((response) => {
   console.log(response);
   
            cb(response);
            this.loader=false;
  }, (error) => {
    console.log(error);
  });

}



// //     let body={ 
// //       verification_type: "1",
// //     login_id:"ddd",
// //     s_id:"ddd",
// //     company_name:"ddd",
// //     no:"dddd", 
// //     picture: "dddd"
// //   };

// // this.request.send_kyc_a(body).subscribe(
// //         (res: any) => {
// //           if (res.message == "Your KYC is sucessfully verified. Happy Shopping!!") {
// //             console.log("",""+res.message);
// //           } else{
// //             this.error = ''+res.message;
// //           }
// //         },
// //         error => {
      
// //         }
// //       );
     

//   }

//   onAddRowSave(form: FormGroup) {

//     let seller={
//       otp :""+this.otpform.controls['otp'].value,
//       mobile_no :""+this.OtpForm.controls['phone'].value,
//     }

//     this.authService
//     .loginotpverification(this.otpform.controls['otp'].value,this.OtpForm.controls['phone'].value)
//     .subscribe(
//       (res) => {
//         if (res) {
//           if (res.message == "Incorrect OTP!!Please Try Again!!!!") {
//             console.log("something went wrong");
//             this.error = 'Incorrect OTP!!Please Try Again!!!!';
//             return;
//           }
//           if (res.login_status == "0") {   
//             this.error = 'Incorrect OTP!!Please Try Again!!!!';
//           }
//           if (res.login_status == "1") {
//                  this.modalService.dismissAll();
//             this.router.navigate(['/dashboard/main']);
//           }
//         } else {
//           this.error = 'Invalid Login';
//         }
//       },
//       (error) => {
//         this.error = error;
//         this.submitted = false;
//       }
//     );

//   }
  onSubmit() {
    this.submitted = true;
    //  this.disable=true;
    this.error2 = '';
    // console.log("submited");  
    if (this.loginForm.invalid) {
      //  this.disable=false;
      this.error2 = 'Enter all Credential';
     
      console.log("err2", this.error2);
      return;
      
     
    } else {
      this.disable=true;
      // current user by login is stored in local storage -see authservice
      this.authService
        .login(this.f.username.value,this.f.password.value,this.f.meeting_type.value)
        .subscribe(
          (res) => {          
            // console.log(res[0]);
            
            if (res) {
              // console.log("res",""+res[0].message)
              if (res[0].message == "Invalid Login Credentials !!Please try again!!") {
                this.disable=false;
                console.log("something went wrong");
                this.error2 = 'Invalid Login Credentials';
                return;
              }
              if (res[0].message == "Invalid Login Credentials !!Please try again!!") { 
                this.disable=false;  
                this.error2 = 'Invalid Login';
              }
              if (res[0].message == "Welcome !!") {
                  
                this.router.navigate(['/dashboard/main']);
              }
            } else {
              this.error2 = 'Invalid Login';
            }
          },
          (error) => {
            this.error2 = error;
            console.log("test",""+error);
            this.submitted = false;
          }
        );
    }
  }
  onOtpSubmit(){
 
  }
}
