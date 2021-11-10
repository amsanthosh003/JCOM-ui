import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent, id } from '@swimlane/ngx-datatable';
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
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.sass'],
  providers: [ToastrService],
})
export class ShowcaseComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  loader =true;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Showcases: any;
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

  modes = [  
    { id: 'Social Media', value: 'Social Media' },
    { id: 'Live Meeting', value: 'Live  Meeting' },
    { id: 'JCOM Conference', value: 'JCOM Conference' },
    { id: 'Whatsapp Group', value: 'Whatsapp Group' },
    { id: 'Facebook', value: 'Facebook' },
  
  ];
 
  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  error: string;
  IdValue: any;
  designations: any;
  custmerdesignationvalue: any;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  memberid: any;
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
    this.register = this.fb.group({
      m_id: this.memberid.m_id,
      date: ['', [Validators.required]],
      title: ['', [Validators.required]],     
      mode: ['', [Validators.required]],
    
    });
  }

  
viewdata(){
  this.fetch((data) => {
    this.data = data; 
    this.Showcases=data; 
    
    this.filteredData=data;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
}
  // fetch data
  fetch(cb) {
    this.request.fetchshowcaseById(this.memberid.m_id).subscribe((response) => {
     console.log(response);    
              cb(response);
              this.loader=false;
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
  
  pendinghistory(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }
  // add new record
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.register.patchValue({
      id: this.getId(10, 100),
      img: this.newUserImg,
    });

  }

  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }
  // save add new record
  onAddRowSave(form: FormGroup) { 
    console.log(form.value);
    this.request.addshowcase(form.value).subscribe((res: any) => {
      console.log("added")
      if (res[0].status == 'success') {
        console.log("statusssss")
        console.log(res);       
        form.reset();
    this.modalService.dismissAll();
    this.viewdata();
    this.addRecordSuccess();

      }
      else if (res[0].status == 'error') {
        console.log("res",res);
        form.reset();
    this.modalService.dismissAll();
      }
    }, (error) => {
      console.log("error",error);
      form.reset();
      this.modalService.dismissAll();
    });


  }

  // save record on edit
  onEditSave(form: FormGroup) {

    const edata = {
      username: form.value.username,
      phone: form.value.phone,
      email: form.value.email,
      password: form.value.password,
      Designation:form.value.Designation
  }
  this.request.updateuser(this.IdValue,edata).subscribe((res : any) => {
    if (res.status == 'success') {
      this.modalService.dismissAll();
      this.viewdata();
      this.editRecordSuccess();
      return true;
    }
    else if (res.status == 'error') {
      this.modalService.dismissAll();
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
    // const colsAmt = this.columns.length;
    const colsAmt = 2;
    // get the key names of each column in the dataset
    const keys = Object.keys( this.filteredData[0]);
    // console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.Showcases = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        console.log("keys",item[keys[i]].toString().toLowerCase().indexOf(val));
        console.log("keyindex",keys[i]);
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
}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}


