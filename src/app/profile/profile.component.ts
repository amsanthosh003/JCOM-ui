import { Component, OnInit, ViewChild, TemplateRef, OnChanges, SimpleChanges} from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RequestService } from "../services/request.service";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../core/models/user';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [ToastrService],
})
export class ProfileComponent implements OnInit{

  // public Editor = ClassicEditor;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  hide: boolean;
  loader = true;
  active;
  nav: any;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Members: any;
  filteredData = [];
  editForm: FormGroup;
  register: FormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption: string;
  reorderable = true;
  editcustmergroup: any;
  public selected: any[] = [];
  custmernamevalue: any;
  custmerphonevalue: any;
  custmeremailvalue: any;
  custmerpasswordvalue: any;

  isdisable: boolean;

  columns = [
    { name: 'username' },
    { name: 'phone' },
    { name: 'email' },
    { name: 'password' }
  ];
  genders = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];
  countries = [
    { id: '1', name: 'India' },

  ];
  meetings = [

    { id: '1', value: 'Live' },
    { id: '2', value: 'Virtual' },
    { id: '3', value: 'Virtual International' },
    { id: '4', value: 'Association' },
  ];
  connects = [

    { id: '1', value: 'JCOM' },
    { id: '2', value: 'JCI' },
    { id: '3', value: 'Non-JCI' },

  ];
  connectssts = [

    { id: '1', value: 'Self Connect' },
    { id: '2', value: 'Within JCI-JCOM' },

  ];

  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  error: string;
  IdValue: any;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  presentuser: any;
  memberid: any;
  Membersvalue: any;
  Memberbusiness_name: any;
  Membername: any;
  Memberaddress: any;
  Memberpincode: any;
  Membercity: any;
  Memberdistrict: any;
  Memberstate: any;
  Memberb_mobile_no: any;
  Memberb_email_id: any;
  Memberwebsite: any;
  Memberbusiness_info: any;
  Memberbusiness_keywords: any;
  Memberproducts: any;
  Memberneeded_contacts: any;
  businessdetails: boolean;
  // pin: string;
  pindetails: any;
  pincity: any;
  pinstate: any;
  pinco: string;
  pinstr: any;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService, private request: RequestService
  ) {

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.memberid = this.currentUserSubject.value[0]

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };


    this.editForm = this.fb.group({

      // name: [''],
      business_name: [''],
      address: [''],
      pin: [''],
      city: [''],
      district: [''],
      state: [''],
      b_mobile_no: [''],
      b_email_id: [''],
      website: [''],
      business_info: [''],
      business_keywords: [''],
      products: [''],
      needed_contacts: [''],
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }
 
  selectInput1(event) {
    let selected = event.target.value;
    if (selected == "1") {
      this.isdisable = true;
    } else {
      this.isdisable = false;
    }
  }

  viewbusiness() {
    this.businessdetails = true;
  }
  hidebusiness() {
    this.businessdetails = false;
    console.log("view",)
  }

  ngOnInit() {

    console.log("currentuser details=", this.currentUserSubject.value[0]);
    // console.log("memberid=",this.memberid)
    this.viewdata();
    // this.designation();
  }

 

  // fetch data
  fetch(cb) {

    this.request.fetchuserBymId(this.memberid.m_id).subscribe((response) => {
      // console.log(response);

      cb(response);
      this.loader = false;
    }, (error) => {
      console.log(error);
    });
  }

  // ngOnChanges(pin: SimpleChanges){ }

  // pinchange.......
  onPinChange(pin:string) {
    console.log("hiii",pin);
    this.pinco = pin;
    console.log(this.pinco);
     this.request.fetchpinBy(this.pinco).subscribe((response) => {
      // console.log(response);
      this.pindetails = response[0];
      console.log(this.pindetails.city);
      console.log(this.pindetails.pincode);

      this.pinstr =this.pindetails.pincode;
      this.pincity = this.pindetails.city;
      this.pinstate = this.pindetails.state;

      console.log(this.pincity);

      this.editForm.setValue({
        business_name: this.Memberbusiness_name,
        address: this.Memberaddress ?? null,
        pin:this.pinstr,
        city:this.pincity,
        district: this.Memberdistrict ?? null,
        state: this.pinstate, 
        b_mobile_no: this.Memberb_mobile_no ?? null,
        b_email_id: this.Memberb_email_id ?? null,
        website: this.Memberwebsite ?? null,
        business_info: this.Memberbusiness_info ?? null,
        business_keywords: this.Memberbusiness_keywords ?? null,
        products: this.Memberproducts ?? null,
        needed_contacts: this.Memberneeded_contacts ?? null,      
      });
     
    },
     (error) => {
      console.log(error);
    });
  }

  toggle() {
    this.hide = !this.hide;
    console.log(this.hide);
  }

  openhistory(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }


  pendinghistory(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }
  
  viewdata() {
    this.fetch((data) => {
      this.data = data;

      // this.filteredData = data;
      this.Members = this.data;
      // console.log(this.Members)  

      this.Membersvalue = this.Members[0];
      // this.welcomeSuccess();

      console.log(this.Membersvalue.pincode);

      // this.Membername = this.Membersvalue.name;
      this.Memberbusiness_name = this.Membersvalue.business_name;
      this.Memberaddress = this.Membersvalue.address;
      this.Memberpincode = this.Membersvalue.pincode;
      this.Membercity = this.Membersvalue.city;
      this.Memberdistrict = this.Membersvalue.district;
      this.Memberstate = this.Membersvalue.state;
      this.Memberb_mobile_no = this.Membersvalue.b_mobile_no;
      this.Memberb_email_id = this.Membersvalue.b_email_id;
      this.Memberwebsite = this.Membersvalue.website;
      this.Memberbusiness_info = this.Membersvalue.business_info;
      this.Memberbusiness_keywords = this.Membersvalue.business_keywords;
      this.Memberproducts = this.Membersvalue.products;
      this.Memberneeded_contacts = this.Membersvalue.needed_contacts;
      this.IdValue = this.Membersvalue.m_id


      this.editForm.setValue({
        // name: this.Membername,
        business_name: this.Memberbusiness_name,
        address: this.Memberaddress ?? null,
        pin: this.Memberpincode ?? null,
        city: this.Membercity ?? null,
        district: this.Memberdistrict ?? null,
        state: this.Memberstate ?? null,
        b_mobile_no: this.Memberb_mobile_no ?? null,
        b_email_id: this.Memberb_email_id ?? null,
        website: this.Memberwebsite ?? null,
        business_info: this.Memberbusiness_info ?? null,
        business_keywords: this.Memberbusiness_keywords ?? null,
        products: this.Memberproducts ?? null,
        needed_contacts: this.Memberneeded_contacts ?? null,
      }
      );
     // this.filteredData=data.response;

      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }

  // save record on edit
  onEditSave(form: FormGroup) {
    console.log("pinnn",form.value.pin)
    const edata = {
      m_id: this.IdValue,
      business_name: form.value.business_name,
      address: form.value.address,
      pincode: form.value.pin,
      city: form.value.city,
      district: form.value.district,
      state: form.value.state,
      b_mobile_no: form.value.b_mobile_no,
      b_email_id: form.value.b_email_id,
      website: form.value.website,
      business_info: form.value.business_info,
      business_keywords: form.value.business_keywords,
      products: form.value.products,
      needed_contacts: form.value.needed_contacts,
    }

    this.request.updateprofile(edata).subscribe((res: any) => {
      console.log(res);
      // console.log(this.IdValue);
      if (res[0].status == 'success') {
        // this.modalService.dismissAll();
        this.editRecordSuccess();
        this.viewdata();
        return true;
      }
      else if (res[0].status == 'error') {
        console.log("fail")
        // this.modalService.dismissAll();
      }

    }, (error) => {
      console.log(error);
      this.modalService.dismissAll();
    });

  }
  // filter table data
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.filteredData[0]);
    // console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.Members = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (
          item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {


          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  // get random id
  getId(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  addRecordSuccess() {
    this.toastr.success('Add Record Successfully', '');
  }
  editRecordSuccess() {
    this.toastr.success('Edit Record Successfully', '');
  }
  deleteRecordSuccess(count) {
    this.toastr.error(count + ' Records Deleted Successfully', '');
  }
  welcomeSuccess() {
    this.toastr.success('welcome !!!  ' + this.Membersvalue.name);
  }

}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}
