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
  selector: 'app-connectpending',
  templateUrl: './connectpending.component.html',
  styleUrls: ['./connectpending.component.sass'],
  providers: [ToastrService],
})
export class ConnectpendingComponent implements OnInit {

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  loader = true;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Connects: any;
  filteredData = [];
  editForm: FormGroup;
  register: FormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption: string;
  reorderable = true;
  editcustmergroup: any;
  public selected: any[] = [];

  isdisable: boolean;
  columns = [
    { name: 'username' },
    { name: 'phone' },
    { name: 'email' },
    { name: 'password' }
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
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  memberid: any;
  pendings: Object;
  Persons: any;
  Tables: Object;
  table_id: string;
  Members: Object;
  Mtable_id: any;
  Tablesstr: any;

  memb_id: any;
  Connectdtls: any;

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
    this.Mtable_id = this.memberid.jib_table;
    this.memb_id = this.memberid.m_id,
      console.log(this.memberid)
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }

  ngOnInit() {
    this.viewdata();
  }

  viewdata() {
    console.log(" viewed");
    this.fetch((data) => {
      this.data = data;
      // this.filteredData = data;
      this.Connects = data;
      console.log(" data", this.Connects);
      this.filteredData = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }

  // fetch data
  fetch(cb) {
    this.request.fetchpendingconnectById(this.memberid.m_id).subscribe((response) => {
      //  console.log("fetch data",response);    
      cb(response);
      this.loader = false;
    }, (error) => {
      console.log(error);
    });

  }
  //mark as unsuccess
  unsuccess(sts) {
    // console.log(sts);

    const edata = {
      connect_id: sts,
    }

    console.log("edata", edata);

    this.request.poststatus(edata).subscribe((response) => {
      console.log(response);
      if (response[0].status == 'Connect Marked Unsuccessfull') {
        this.modalService.dismissAll();
        this.viewdata();
        this.addRecordSuccess();
      }
      else if (response[0].status == 'error') {
        console.log("res", response);
        this.modalService.dismissAll();
      }
    }, (error) => {
      console.log(error);
    });

  }
  openprofile(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.Connectdtls = row;
    console.log(this.Connectdtls.connect_name);
  }


  // open record
  openRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });

    // console.log(row);
    this.Connectdtls = row;
    console.log(this.Connectdtls.connect_name);

    // this.request.fetchpersonById(row.m_id).subscribe((response) => {
    //   this.Persons=response[0];
    //   console.log(response);

    // });
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
    const keys = Object.keys(this.filteredData[0]);
    console.log("keys", "" + keys);
    // assign filtered matches to the active datatable
    this.Connects = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      console.log("keys",item);
      for (let i = 3; i <4; i++) {
        console.log("itemkeys", item[keys[i]].toString().toLowerCase().indexOf(val));
        console.log("keyindex", keys[i]);
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
    this.toastr.success('Connect Marked Unsuccessfull', '');
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
