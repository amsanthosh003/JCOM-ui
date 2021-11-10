import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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

@Component({
  selector: 'app-searchmembers',
  templateUrl: './searchmembers.component.html',
  styleUrls: ['./searchmembers.component.sass'],
  providers: [ToastrService],
})
export class SearchmembersComponent implements OnInit {
  
 
  loader =true;
  active;
  // public Editor = ClassicEditor;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  p: number = 1;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Customers: any; 
  filteredData = [];
  editForm: FormGroup;
  register: FormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption: string;
  reorderable = true;
  editcustmergroup: any;
  public selected: any[] = [];
  custmernamevalue:any;
  custmerphonevalue:any;
  custmeremailvalue:any;
  custmerpasswordvalue:any;

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
  designations: any;
  custmerdesignationvalue: any;
  keyword: any;
  KeyMembers: Object;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  memberid: any;
  Mtable_id: any;
  memb_id: any;
  memdtls: any;
  Business: any;
  CatMembers: any;
  busmemb: any;
  Busmemb: any;
  filteredData1 = [];
  filteredData2 = [];
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,private request: RequestService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.memberid = this.currentUserSubject.value[0]
    this.Mtable_id=this.memberid.jib_table;
    this.memb_id=this.memberid.m_id,
    console.log(this.memberid)
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }

  
  selectInput1(event) {
    let selected = event.target.value;
    if (selected == "1") {
      this.isdisable = true ;
    } else {
      this.isdisable =  false;
    }
  }

 
  ngOnInit() {
    this.viewdata();
    // this.designation();

    this.register = this.fb.group({
      keyword: ['', [Validators.required]],   
    });
  }
  
viewdata(){
  this.fetch((data) => {
    this.data = data;
    // this.filteredData = data;
    this.Business=data;
    this.filteredData=data;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
}
  // fetch data
  fetch(cb) {

    this.request.fetchbusiness().subscribe((response) => {
     console.log(response);
     
              cb(response);
              this.loader=false;
    }, (error) => {
      console.log(error);
    });

  }



  openkeysearch(content) {
    this.register.reset();
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });

  }

  openkeymembers(content) {
    // console.log("wrk")
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.loader=true;
  }
  // save add new record
  onAddRowSave(form: FormGroup) {
    // console.log(form.value);
    this.keyword= form.value.keyword
    this.request.getkeymembers(this.memb_id,this.keyword).subscribe((response:any) => {
      this.KeyMembers=response;
      this.loader=false;
      response.forEach(element =>{
        this.filteredData2.push(element);
      });
      // console.log(this.KeyMembers);
        }, (error) => {
          console.log(error);
        });
 

  }
  
  openhistory(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }
  openmembers(id,content) {
    this.CatMembers="";
    console.log("category id",id);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.loader=true;
    this.request.getbusinessmembers(this.memb_id,id).subscribe((response:any) => {
      // console.log(response.data);
      this.CatMembers=response;
      response.forEach(element =>{
        this.filteredData1.push(element);
      });
    //  this.filteredData1=response.data;
      this.loader=false;
     console.log(this.CatMembers);
   console.log(this.filteredData1);
        }, (error) => {
          console.log(error);
        });
  }

  
  pendinghistory(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  openbusinessprofile(rec, content) {
    console.log("busmem",rec);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.Busmemb=rec;
    console.log("busmem",this.Busmemb);
  }

  openkeyprofile(name,content) {
    // console.log(name);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
     this.memdtls=name;
     
  }

  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }

  // filter table data
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys( this.filteredData[0]);
    console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.Business = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < 1; i++) {
        console.log("itemkeys",item[keys[i]].toString().toLowerCase().indexOf(val));
        console.log("keyindex",keys[i]);
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
    // this.table.offset = 0;
  }

   // filter table data for category mebers
   filterDatatable1(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys( this.filteredData1[0]);
    console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.CatMembers = this.filteredData1.filter(function (item) {
      // iterate through each row's column data
      for (let i = 1; i < 2; i++) {
        console.log("itemkeys",item[keys[i]].toString().toLowerCase().indexOf(val));
        console.log("keyindex",keys[i]);
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
    // this.table.offset = 0;
  }

   // filter table data for keymembers
   filterDatatable2(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys( this.filteredData2[0]);
    console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.KeyMembers = this.filteredData2.filter(function (item) {
      // iterate through each row's column data
      for (let i = 1; i < 2; i++) {
        console.log("itemkeys",item[keys[i]].toString().toLowerCase().indexOf(val));
        console.log("keyindex",keys[i]);
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
    // this.table.offset = 0;
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
}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}
