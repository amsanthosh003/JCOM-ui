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
  selector: 'app-connectentry',
  templateUrl: './connectentry.component.html',
  styleUrls: ['./connectentry.component.sass'],
  providers: [ToastrService],
})
export class ConnectentryComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  loader =true;
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
  setname: any;
  setmobile: any;
  setemail: any;
  Business: Object;
  memb_id: any;
  Connectdtls: any;
  pending: boolean;
  history: boolean=true;
  tblname: any;
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
    this.memb_id=this.memberid.m_id;
    this.tblname=this.memberid.table_name;
    console.log(this.memberid);
    console.log(this.tblname);
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }

  ngOnInit() {
    this.viewdata();  
    this.gettable();
    this.business();
    
   
    this.register = this.fb.group({
      m_id:this.memb_id,
      to_member_id: ['', [Validators.required]],
      connect_type: ['', [Validators.required]],
      connect_status: [''],
      business_category: ['', [Validators.required]],
      connect_name: ['',[Validators.required]],
      mobile_no: ['', [Validators.required]],
      email_id: [
        '', [Validators.required, Validators.email, Validators.minLength(5)]
     ],
      address: [''],
      about_connect: ['',[Validators.required]],
      comments: [''],

    });
  }
 
  
viewdata(){
  this.fetch((data) => {
    this.data = data;
    // this.filteredData = data;
    this.Connects=data;
    // console.log(" data",this.Connects[0].connect_status); 
    this.filteredData=data;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
}

  // fetch data
  fetch(cb) {
    this.request.fetchconnectById(this.memberid.m_id).subscribe((response) => {
    //  console.log("fetch data",response);    
              cb(response);
              this.loader=false;
    }, (error) => {
      console.log(error);
    });

  }

  gettable(){
    this.request.gettables().subscribe((response) => {
      this.Tables=response;
      // console.log(this.Tables);
        }, (error) => {
          console.log(error);
        });   
  }
  // gettablebyId(id){
  //   this.request.fetchtableById(this.Mtable_id).subscribe((response) => {
  //     this.Tablesstr=response;
  //     console.log(this.Tablesstr);
  //       }, (error) => {
  //         console.log(error);
  //       });   
  // }


  ontableChange(tbl_id:string) {
    console.log("hiii",tbl_id);
    this.table_id =tbl_id;    
    this.request.gettablemembers(this.memberid.m_id,this.table_id).subscribe((response) => {
      console.log("member_id",this.memberid.m_id);
      
           this.Members=response;
           console.log("res",this.Members); 
    },
     (error) => {
      console.log(error);
    });
  }
  // gettablemembers(){
    
  //   this.request.gettablemembers(this.memberid.m_id,t_id).subscribe((response) => {
  //     this.Tables=response;
  //     console.log(this.Tables);
  //       }, (error) => {
  //         console.log(error);
  //       });   
  // }

  selectInput1(event) {
    console.log("yes");
    let selected = event.target.value;
    if (selected == "1") {
      this.isdisable = true ;
    } else {
      this.isdisable =  false;
      this.setname = "";
    this.setmobile = "";
    this.setemail = "";

    }
  }


//self 
selectInput2(event) {
  let selectedsts = event.target.value;
  if (selectedsts == "0") {
    this.setname = this.memberid.m_name ;
    this.setmobile =this.memberid.m_mobile;
    this.setemail =this.memberid.m_email_id;
    console.log("setname",this.setname)
  } else {
    this.setname = "";
    this.setmobile = "";
    this.setemail = "";
  }
}
setnull(){
  this.setname = "";
    this.setmobile = "";
    this.setemail = "";
   this.register.reset();
}

// business fetch
business() {
  this.request.fetchbusiness().subscribe((response) => {
this.Business=response;
// console.log(this.designations);
  }, (error) => {
    console.log(error);
  });

}

  openprofile(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });  
  }
 
  pendinghistory() {
    this.history=false;
    this.pending=true;

    // this.request.getconnectpending(this.memberid.m_id).subscribe((response) => {
    //   this.pendings=response;
    //   console.log(this.pendings);
    //     }, (error) => {
    //       console.log(error);
    //     });
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

    this.setnull();

    this.request.gettablemembers(this.memberid.m_id,this.Mtable_id).subscribe((response) => {
      console.log("member_id",this.memberid.m_id);
      console.log("table_id",this.Mtable_id);
           this.Members=response;
          //  console.log("res",this.Members);             
    },
    (error) => {
      console.log(error);
    });

   
  }
  // open record
  openRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
   
    // console.log(row);
    this.Connectdtls=row;
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
  // save add new record
  onAddRowSave(form: FormGroup) {
    
    const edata = {   
      m_id: this.memberid.m_id,
      to_member_id:form.value.to_member_id,
      connect_type:form.value.connect_type,
      connect_status:form.value.connect_status,
      business_category:form.value.business_category,
      connect_name:form.value.connect_name,
      mobile_no:form.value.mobile_no,
      email_id: form.value.email_id ,
      address:form.value.address,
      about_connect:form.value.about_connect,
      comments:form.value.comments,
    }
    console.log(edata);
  
    this.request.addconnect(edata).subscribe((res: any) => {
      console.log(res);
      if (res[0].status == 'success') {       
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
    this.Connects = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 2; i < 3; i++) {
        // console.log("itemkeys",item[keys[i]].toString().toLowerCase().indexOf(val));
        // console.log("keyindex",keys[i]);
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
