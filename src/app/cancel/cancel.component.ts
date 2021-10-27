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

import { FileUpload } from 'src/app/services/fileupload';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.sass'],
  providers: [ToastrService],
})
export class CancelComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
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
  custmerNamevalue:any;
  custmerVechicleTypevalue:any;
  custmerMin_kmvalue:any;
  custmerMin_pricevalue:any;
  custmerPrice_kmvalue:any;
  custmerWaiting_minvalue:any;
  custmerCapacityvalue:any;
  custmerWidthvalue:any;
  custmerHeightvalue:any;
  custmerLengthvalue:any;
  columns = [
    { name: 'Name' },
    { name: 'VechicleType' },
    { name: 'Capacity' },
    { name: 'Width' },
    { name: 'Height' },
    { name: 'Length' },
  ];
  VechicleTypes = [
    { id: '1', value: 'open' },
    { id: '2', value: 'close' },
    { id: '3', value: 'any' },
  ];
  statusType = [
    { id: '1', value: 'Active' },
    { id: '2', value: 'Completed' },
    { id: '3', value: 'Pending' },
  ];
  designationType = [
    { id: '1', value: 'Manager' },
    { id: '2', value: 'Team Leader' },
    { id: '3', value: 'Clerk' },
  ];


  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  url:any;
  private basePath = '/uploads';
  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  error: string;
  IdValue: any;
  custmermin_waiting_timevalue: any;
  custmerpickuplocationvalue: any;
  custmerDroplocationvalue: any;
  custmerVechicaltypevalue: any;
  custmervehiclenamevalue: any;
  custmerBookdatenvalue: any;
  custmerAmountnvalue: any;
  custmerTotalKmnvalue: any;
  constructor(    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,private request: RequestService,private router: Router) {
      this.editForm = this.fb.group({
        username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        phone: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
        password: ['', [Validators.required]],
        Bookdate: ['', [Validators.required]],
        Amount: ['', [Validators.required]],
        TotalKm: ['', [Validators.required]]
      });
     }

  ngOnInit(): void {
    this.viewdata();
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }
  viewdata(){
    this.fetch((data) => {
      this.data = data;
      // this.filteredData = data;
      this.Customers=data.response;
      this.filteredData=data.response;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }
   // fetch data
   fetch(cb) {
    this.request.getcanceled().subscribe((response) => {
     console.log(response);
      cb(response);
    }, (error) => {
      console.log(error);
    });

  } 
  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }
   // edit record
   editRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  
  console.log("test")
  
  this.request.fetchpendingagreegationById(row._id).subscribe((response) => {
    this.editcustmergroup=response;
   
    console.log("responsssse", this.editcustmergroup);
      this.custmerpickuplocationvalue=this.editcustmergroup[0].Pickuploc;
      this.custmerDroplocationvalue=this.editcustmergroup[0].Droploc;
      this.custmerVechicaltypevalue=this.editcustmergroup[0].Vechicaltype;
      this.custmervehiclenamevalue=this.editcustmergroup[0].vechicalDetails[0].Name;
      this.custmerBookdatenvalue=this.editcustmergroup[0].Bookdate;
      this.custmerAmountnvalue=this.editcustmergroup[0].Amount;
      this.custmerTotalKmnvalue=this.editcustmergroup[0].TotalKm;
      this.IdValue=this.editcustmergroup._id;
  
    //   this.editForm = this.formBuilder.group({
    //     CountryName2:[this.CountryValue, Validators.required],
    //     Countrycode2:[this.CountrycodeValue, Validators.required]
    // });
    // console.log(this.editForm.value);
  
  
  
    this.editForm.setValue({
      username: this.custmerpickuplocationvalue,
      phone: this.custmerDroplocationvalue,
      email: this.custmerVechicaltypevalue,
      password: this.custmervehiclenamevalue,
      Bookdate:this.custmerBookdatenvalue,
      Amount:this.custmerAmountnvalue,
      TotalKm:this.custmerTotalKmnvalue,
    });
    this.selectedRowData = row;
  
  });
   }

  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys( this.filteredData[0]);
    // console.log("keys",""+keys);
    // assign filtered matches to the active datatable
    this.Customers = this.filteredData.filter(function (item) {
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
}

export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}
