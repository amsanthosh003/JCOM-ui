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
  selector: 'app-jcomtables',
  templateUrl: './jcomtables.component.html',
  styleUrls: ['./jcomtables.component.sass'],
  providers: [ToastrService],
})
export class JcomtablesComponent implements OnInit {

  active;
  // public Editor = ClassicEditor;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  
  p: number = 1;
 
  loader =true;
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
  public selected: any[] = []; 
  filteredData1: any[];

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
  Members: Object;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  memberid: any;
  public Tables: any;
  Mtable_id: any;
  tableid: any;
  loader1:boolean;
  m: number = 1;
  data1: Object;
  // filteredData1: Object;

  
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
    this.Mtable_id = this.memberid.jib_table;
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
  // select record using check box
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if (this.selected.length === 0) {
      this.isRowSelected = false;
    } else {
      this.isRowSelected = true;
    }
  }
  ngOnInit() {
    this.viewdata();
    // this.designation();
    this.register = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      phone: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', [Validators.required]],
      Designation: ['', [Validators.required]]
    });
  }

  viewdata(){
    this.fetch((data) => {
      this.data = data;
      // this.filteredData = data;
      this.Tables=data;
      console.log("tab",this.Tables)
      this.filteredData=data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }
  
  // fetch data
  fetch(cb) {

    this.request.gettables().subscribe((response) => {
     console.log(response);    
              cb(response);
              this.loader=false;
    }, (error) => {
      console.log(error);
    });

  }

  // designation() {
  //   this.request.getdesignation().subscribe((response) => {
  // this.designations=response;
  // console.log(this.designations);
  //   }, (error) => {
  //     console.log(error);
  //   });

  // }
 
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

  openprofile(column,content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    console.log(column);
   
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

  openRow(row, content) {  
    this.Members="";
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.loader1=true;
    // console.log("table id",row);
    this.tableid =row;      
    this.request.gettablemembers(this.memberid.m_id, this.tableid).subscribe((response) => {
      this.loader1=false;         
           this.Members=response;     
          //  this.filteredData1 =this.Members;      
           console.log("res",this.Members); 
    },
     (error) => {
      console.log(error);
    });
    
    // this.request.fetchuserById(row.table).subscribe((response) => {
    //   this.editcustmergroup=response[0];
    //   console.log(response);
 
    // });
  }


  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }
  // save add new record
  onAddRowSave(form: FormGroup) {
  
    console.log(form.value);
    this.request.adduser(form.value).subscribe((res: any) => {
      if (res.status == 'success') {
        console.log(res);
        form.reset();
    this.modalService.dismissAll();
    this.viewdata();
    this.addRecordSuccess();

      }
      else if (res.status == 'error') {
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
  // filter table data for table
  filterDatatable(event) {  
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    
    // get the key names of each column in the dataset
    const keys = Object.keys(this.filteredData[0]);
    console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.Tables= this.filteredData.filter(function (item) {
      // iterate through each row's column data
      console.log("item",item);

      for (let i = 0; i < 2; i++) {
        
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


  //filter for members
  filterDatatable1(event) {
 
    const val = event.target.value.toLowerCase();
    const colsAmt = this.columns.length;
    console.log("keysertr",val);
    // console.log("keysertr",colsAmt);
    const keys = Object.keys( this.filteredData1[0] );
    console.log("keys",""+keys);
    this.Members= this.filteredData1.filter(function (item) {
      // iterate through each row's column data
      console.log("item",item);

      for (let i = 0; i < 2; i++) {
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
