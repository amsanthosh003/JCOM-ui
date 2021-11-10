import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import{environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  url: string;
  endPoint = 'https://tamilrise.herokuapp.com';



  endPoint1 = environment.baseURL1;

  endPoint2 = environment.baseURL2;

  public adminlogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/login.php`;
    return this.http.post(this.url, credentials);
  }

  public adminotplogin(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/login_otp.php`;
    return this.http.post(this.url, credentials);
  }
  public adminotploginverify(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/login_otp_verification.php`;
    return this.http.post(this.url, credentials);
  }

  public loadpincodebyins(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/get_pincode.php`;
    return this.http.post(this.url, credentials);
  }

  public addseller(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/seller_signup.php`;
    return this.http.post(this.url, credentials);
  }

  public addsellerotp(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/seller_otp_verification.php`;
    return this.http.post(this.url, credentials);
  }
  public send_kyc_a(credentials):Observable<any>{
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/send_kyc_a.php`;
    return this.http.post(this.url, credentials).pipe(
      tap((cr)=>{
        console.log("ttttttttt",cr)
      })
    );
  }
  
  public send_kyc_b(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/send_kyc_b.php`;
    return this.http.post(this.url, credentials);
  }


  public send_kyc_c(credentials) {
    console.log('credentials2',credentials);
    this.url = `${this.endPoint1}/api_seller/send_kyc_c.php`;
    return this.http.post(this.url, credentials);
  }


 //meeting type
 public getmeetingtype() {
  this.url = `${this.endPoint2}/get_meeting_type.php`;
  return this.http.get(this.url);
}

//profile
public fetchuserBymId(id) {
  this.url = `${this.endPoint2}/get_member_details.php?m_id=` + id;
  return this.http.get(this.url);
}
public updateprofile(body) { 
  this.url = `${this.endPoint2}/send_member_details.php`;
  return this.http.put(this.url, body);
}

//pincode
public fetchpinBy(id) {
  this.url = `${this.endPoint2}/get_pincode.php?pincode=` + id;
  return this.http.get(this.url);
}

//showcase
public fetchshowcaseById(id) {
  this.url = `${this.endPoint2}/get_showcase_history.php?m_id=` + id;
  return this.http.get(this.url);
}

public addshowcase(newshow: {date: any; title: any; mode: any;}) {
  this.url = `${this.endPoint2}/send_showcase.php`;
  return this.http.post(this.url, newshow);
}

//guest reg
public fetchguestById(id) {
  this.url = `${this.endPoint2}/get_guest_history.php?m_id=` + id;
  return this.http.get(this.url);
}

public addguest(newguest:{ m_id:any; guest_name: any; mobile_no: any;email_id: any;guest_city: any;business_category: any;type: any;}) {
  this.url = `${this.endPoint2}/send_guest.php`;
  return this.http.post(this.url, newguest);
}

//business category 
public fetchbusiness() {
  this.url = `${this.endPoint2}/get_business_category.php`;
  return this.http.get(this.url);
}


// connectentry
public fetchconnectById(id) {
  this.url = `${this.endPoint2}/get_connect_list.php?m_id=` + id;
  return this.http.get(this.url);
}

public getconnectpending(id) {
  this.url = `${this.endPoint2}/get_guest_history.php?m_id=` + id;
  return this.http.get(this.url);
}

public fetchpersonById(id) {
  this.url = `${this.endPoint2}/get_guest_history.php?m_id=` + id;
  return this.http.get(this.url);
}

public addconnect(newconnect: {m_id:any; to_member_id:any; connect_type:any;
   connect_status:any; business_category:any; connect_name:any; mobile_no:any;
   email_id:any; address:any; about_connect:any; comments:any;}) {
    
  this.url = `${this.endPoint2}/send_connect.php`;
  return this.http.post(this.url, newconnect);
}
// pendingconnect
public fetchpendingconnectById(id) {
  this.url = `${this.endPoint2}/get_pending_connect.php?m_id=` + id;
  return this.http.get(this.url);
}
public poststatus(newconnect: {connect_id:any;}) {
   
 this.url = `${this.endPoint2}/send_marku.php`;
 console.log("sts",newconnect)
 return this.http.post(this.url, newconnect);
}


//gnoteentry
public fetchgnoteById(id) {
  this.url = `${this.endPoint2}/get_gnote_list.php?m_id=` + id;
  return this.http.get(this.url);
}
//change password

public updatePassword(body) {
  this.url = `${this.endPoint2}/change_password.php`;
  return this.http.put(this.url, body);
}

//tables
public gettables() {
  this.url = `${this.endPoint2}/get_jcom_table.php`;
  return this.http.get(this.url);
}
//tablemembers
public gettablemembers(id,id2) {
  this.url = `${this.endPoint2}/get_member_list.php?m_id=` + id+'&table_id=' + id2;
  return this.http.get(this.url);
}
// public fetchtableById(id) {
//   this.url = `${this.endPoint2}/get_gnote_list.php?m_id=` + id;
//   return this.http.get(this.url);
// }

//get member connect
public getconnectmembers(id,id2) {
  this.url = `${this.endPoint2}/get_connect_member.php?m_id=` + id+'&to_member_id=' + id2;
  return this.http.get(this.url);
}

public addgnote(newgnote: {
  m_id:any;
  connect_id:any;
  to_member_id:any;
  business_type: any;
  connect_status: any;
  amount: any;
  business_category: any;
  comments:any;  }) {
   
 this.url = `${this.endPoint2}/send_gnote.php`;
 return this.http.post(this.url, newgnote);
}
//search by key
public getkeymembers(id,key) {
  this.url = `${this.endPoint2}/get_keyword_search.php?m_id=` + id+'&keyword=' + key;
  return this.http.get(this.url);
}

public getbusinessmembers(id,id2) {
  this.url = `${this.endPoint2}/get_category_members.php?m_id=` + id+'&category_id=' + id2;
  return this.http.get(this.url);
}
  //customer
  public getcustomer() {
    this.url = `${this.endPoint1}/customer/`;
    return this.http.get(this.url);
  }

 
  public addcustomer(newexam: {username: any; phone: any;email: any;password: any;}) {
    this.url = `${this.endPoint1}/customer/add`;
    return this.http.post(this.url, newexam);
  }


  public deletecustomer(id) {
    this.url = `${this.endPoint1}/customer/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchcustomerById(id) {
    this.url = `${this.endPoint1}/customer/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updatecustomer(id, body) {
    this.url = `${this.endPoint1}/customer/update?id=${id}`;
    return this.http.put(this.url, body);
  }

  public fetchpendingagreegationById(id) {
    this.url = `${this.endPoint1}/booking/acceptedaggregation?_id=` + id+'&Bookingstatus=Pending';
    return this.http.get(this.url);
  }

  //user


  public getuser() {
    this.url = `${this.endPoint1}/customer/`;
    return this.http.get(this.url);
  }

 
  public adduser(newexam: {username: any; phone: any;email: any;password: any;Designation: any;}) {
    this.url = `${this.endPoint1}/user/add`;
    return this.http.post(this.url, newexam);
  }


  public deleteuser(id) {
    this.url = `${this.endPoint1}/user/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchuserById(id) {
    this.url = `${this.endPoint1}/user/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updateuser(id, body) {
    this.url = `${this.endPoint1}/user/update?id=${id}`;
    return this.http.put(this.url, body);
  }



   //goodstype


   public getgoodstype() {
    this.url = `${this.endPoint1}/goods/`;
    return this.http.get(this.url);
  }

 
  public addgoodstype(newexam: {GoodsName: any;}) {
    this.url = `${this.endPoint1}/goods/add`;
    return this.http.post(this.url, newexam);
  }


  public deletegoodstype(id) {
    this.url = `${this.endPoint1}/goods/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchgoodstypeById(id) {
    this.url = `${this.endPoint1}/goods/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updategoodstype(id, body) {
    this.url = `${this.endPoint1}/goods/update?id=${id}`;
    return this.http.put(this.url, body);
  }





  public getpending() {
    this.url = `${this.endPoint1}/booking/aggregation`;
    return this.http.get(this.url);
  }
  public getAccepted() {
    this.url = `${this.endPoint1}/booking/acceptaggregation?Bookingstatus=Accepted`;
    return this.http.get(this.url);
  }
  public getComplted() {
    this.url = `${this.endPoint1}/booking/acceptaggregation?Bookingstatus=Closed`;
    return this.http.get(this.url);
  }

  public getcanceled() {
    this.url = `${this.endPoint1}/booking/acceptaggregation?Bookingstatus=Cancel`;
    return this.http.get(this.url);
  }
   //vechicle


   public getvechiclecost(id) {
    this.url = `${this.endPoint1}/vechicalcost/fetchdata1?Vechicle=` + id;
    return this.http.get(this.url);
  }

 
  public addvechiclecost(newexam: {Startkm: any;Endkm: any;amount: any;Vechicle: any;}) {
    this.url = `${this.endPoint1}/vechicalcost/add`;
    return this.http.post(this.url, newexam);
  }


  public deletevechiclecost(id) {
    this.url = `${this.endPoint1}/vechicalcost/delete?id=` + id;
    return this.http.delete(this.url);
  }


  public fetchvechiclecostById(id) {
    this.url = `${this.endPoint1}/vechicalcost/fetchdata?id=` + id;
    return this.http.get(this.url);
  }

  public updatevechiclecost(id, body) {
    this.url = `${this.endPoint1}/vechicalcost/update?id=${id}`;
    return this.http.put(this.url, body);
  }
//vechiclecost


public getvechicle() {
  this.url = `${this.endPoint1}/vechicle/`;
  return this.http.get(this.url);
}


public addvechicle(newexam: {Name: any;VechicleType: any;Min_km: any;Min_price: any;Price_km: any;Waiting_min: any;Capacity: any;Width: any;Height: any;Length: any;}) {
  this.url = `${this.endPoint1}/vechicle/add`;
  return this.http.post(this.url, newexam);
}


public deletevechicle(id) {
  this.url = `${this.endPoint1}/vechicle/delete?id=` + id;
  return this.http.delete(this.url);
}


public fetchvechicleById(id) {
  this.url = `${this.endPoint1}/vechicle/fetchdata?id=` + id;
  return this.http.get(this.url);
}

public updatevechicle(id, body) {
  this.url = `${this.endPoint1}/vechicle/update?id=${id}`;
  return this.http.put(this.url, body);
}

public getdesignation() {
  this.url = `${this.endPoint1}/designation/`;
  return this.http.get(this.url);
}




public getmap() {
  this.url = `https://app.fleettrack.co.in/api/get_vehicles?token=G6dwJti2egsaU85hvjHYyXl743O0uQFW&email=kargosranjith@gmail.com`;
  return this.http.get(this.url);
}


    //vechicle


    public getdriver() {
      this.url = `${this.endPoint1}/driverreg/`;
      return this.http.get(this.url);
    }
  
   
    public adddriver(newexam: {Name: any;Mobileno: any;Address: any;Email: any;Blood_Group: any;Emg_Contactno: any;Aadhar_No: any;Licence_No: any;Dl_Exp_Date: any;Vechicle_Type: any;VechicleNum: any;}) {
      this.url = `${this.endPoint1}/driverreg/add`;
      return this.http.post(this.url, newexam);
    }
  
  
    public deletdriver(id) {
      this.url = `${this.endPoint1}/driverreg/delete?id=` + id;
      return this.http.delete(this.url);
    }
  
  
    public fetchdriverById(id) {
      this.url = `${this.endPoint1}/driverreg/fetchdata?id=` + id;
      return this.http.get(this.url);
    }
  
    public updatedriver(id, body) {
      this.url = `${this.endPoint1}/driverreg/update?id=${id}`;
      return this.http.put(this.url, body);
    }


    public getcount() {
      this.url = `${this.endPoint1}/booking/bookingcount`;
      return this.http.get(this.url);
    }
}
