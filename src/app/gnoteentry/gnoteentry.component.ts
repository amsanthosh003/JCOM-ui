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
  selector: 'app-gnoteentry',
  templateUrl: './gnoteentry.component.html',
  styleUrls: ['./gnoteentry.component.sass'],
  providers: [ToastrService],
})
export class GnoteentryComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  loader = true;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  public Gnotes: any;
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
  designations: any;
  custmerdesignationvalue: any;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  memberid: any;
  Members: Object;
  Tables: Object;
  table_id: string;
  Mtable_id: any;
  Business: Object;
  // Connectmem: Object;
  public Connectmem: any;
  connectid: any;
  Gnotedtls: any;
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
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };

  }

  ngOnInit() {
    this.viewdata();
    this.gettable();
    this.business();

    this.register = this.fb.group({
      m_id: this.memberid.m_id,
      connect_id: ['', [Validators.required]],
      to_member_id: ['', [Validators.required]],
      business_type: ['', [Validators.required]],
      connect_status: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      business_category: ['', [Validators.required]],
      comments: [''],
    });
  }


  viewdata() {
    this.fetch((data) => {
      this.data = data;
      // this.filteredData = data;
      this.Gnotes = data;
      this.filteredData = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }
  // fetch data
  fetch(cb) {
    this.request.fetchgnoteById(this.memberid.m_id).subscribe((response) => {
      console.log(response);
      cb(response);
      this.loader = false;
    }, (error) => {
      console.log(error);
    });

  }
  gettable() {
    this.request.gettables().subscribe((response) => {
      this.Tables = response;
      // console.log(this.Tables);
    }, (error) => {
      console.log(error);
    });
  }

  // business fetch
  business() {
    this.request.fetchbusiness().subscribe((response) => {
      this.Business = response;
      console.log(this.Business);
    }, (error) => {
      console.log(error);
    });
  }

  ontableChange(tbl_id: string) {
    console.log("hiii", tbl_id);
    this.table_id = tbl_id;
    this.request.gettablemembers(this.memberid.m_id, this.table_id).subscribe((response) => {
      console.log("member_id", this.memberid.m_id);
      this.Members = response;
      console.log("res", this.Members);
    },
      (error) => {
        console.log(error);
      });
  }

  openprofile(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  opendetails(row , rowIndex ,content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    console.log(row);
    this.Gnotedtls=row;
    console.log(this.Gnotedtls.name);
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
    this.register.reset();
    this.request.gettablemembers(this.memberid.m_id, this.Mtable_id).subscribe((response) => {
      // console.log("member_id", this.memberid.m_id);
      // console.log("table_id", this.table_id);
      this.Members = response;
      // console.log("res", this.Members);
    },
      (error) => {
        console.log(error);
      });
  }
  selectInput1(event) {
    let selected = event;
    console.log(selected.id);
    this.isdisable = true;
    this.request.getconnectmembers(this.memberid.m_id,selected.id).subscribe((response) => {
      console.log("to mem_id", selected);
      this.Connectmem = response;
      // this.connectid=this.Connectmem[0].connect_id;
      console.log("res", response);
    },
      (error) => {
        console.log(error);
      });
    // if (selected == "1") {
    //   this.isdisable = true;
    // } else {
    //   this.isdisable = false;
    // }
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


  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }
  // save add new record
  onAddRowSave(form: FormGroup) {
    const edata = {   
      m_id: this.memberid.m_id,
      connect_id:form.value.connect_id,
      to_member_id:form.value.to_member_id,
      business_type: form.value.business_type,
      connect_status: form.value.connect_status,
      amount: form.value.amount,
      business_category: form.value.business_category,
      comments:form.value.comments,
    }
    console.log(edata);
    this.request.addgnote(edata).subscribe((res: any) => {
      if (res[0].status == 'success') {
        console.log(res);
        form.reset();
        this.modalService.dismissAll();
        this.viewdata();
        this.addRecordSuccess();

      }
      else if (res[0].status == 'error') {
        console.log("res", res);
        form.reset();
        this.modalService.dismissAll();
      }
    }, (error) => {
      console.log("error", error);
      form.reset();
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
    const keys = Object.keys(this.filteredData[0]);
    console.log("keys", "" + keys);
    // assign filtered matches to the active datatable
    this.Gnotes = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        console.log("keysss", item[keys[i]].toString().toLowerCase().indexOf(val));
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
    this.toastr.success('Add Gnote Successfully', '');
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

