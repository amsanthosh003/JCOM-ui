
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
import { RequestService } from "../../services/request.service"; 

import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexFill,
  ApexPlotOptions,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  series2: ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  labels: string[];
};
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../core/models/user';

export type smallBarChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ToastrService],
})
export class MainComponent implements OnInit {
  public lineChartOptions: Partial<ChartOptions>;
  public barChartOptions: Partial<ChartOptions>;
  public stackBarChart: Partial<ChartOptions>;
  public pieChartOptions: Partial<ChartOptions>;
  public smallBarChart: any;
  public sampleData = [
    31,
    40,
    28,
    44,
    60,
    55,
    68,
    51,
    42,
    85,
    77,
    31,
    40,
    28,
    44,
    60,
    55,
  ];
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  userstr: any;
  scrollBarHorizontal: boolean;
  data: any;
  Connects: any;
  filteredData: any;
  loadingIndicator: boolean;
 
  memberid: any;
  loader: boolean;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
 
  rows = [];
 
 
  newUserImg = 'assets/images/users/user-2.png';
  data1 = [];
  public Connectss: any;
  
  editForm: FormGroup;
  register: FormGroup;

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
  Gnotes: any;
  data2: any;
  shortt: any;
  Meetings: Object;
  sts: any;
  OverallStatus: any;
  barChartOptions2: { series: { name: string; data: number[]; }[]; chart: { type: string; height: number; foreColor: string; }; plotOptions: { bar: { horizontal: boolean; columnWidth: string; borderRadius: number; }; }; grid: { borderColor: string; }; dataLabels: { enabled: boolean; }; stroke: { show: boolean; width: number; colors: string[]; }; xaxis: { categories: string[]; labels: { style: { colors: string; }; }; }; yaxis: { title: { text: string; }; }; fill: { opacity: number; }; tooltip: { theme: string; marker: { show: boolean; }; x: { show: boolean; }; }; };
  Statics: Object;
  month1:[];
  connectgiv: any;
  gnoterec: any;
  avggiven: any;
  avgrec: any;


  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private request: RequestService){
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.userstr = this.currentUserSubject.value[0]
    this.memb_id=this.userstr.m_id;
    console.log("user name",this.userstr.m_name);
   
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };

  }

  ngOnInit() {
    this.chart1();
    this.chart2();
    this.chart3();
    this.chart4();
    this.welcomeSuccess();
    this.viewdata();  
     this.viewdata2();
     this.meeting() ;
     this.cardCharts() ;
     this.piechart();
     this.statics();

  }


  viewdata(){
    this.fetch((data) => {
      this.data1 = data;
      // this.filteredData = data;
      
      console.log(" data",data); 
      var result = data.filter(obj => {
        return obj.type == 2
      });
      this.Connectss=result.slice(0, 10);
  
      console.log("short",result);
    //  this.shortt= this.data1.find({type:1});
      
     
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }
  
    // fetch data
    fetch(cb) {
      this.request.fetchconnectById(this.userstr.m_id).subscribe((response) => {
      //  console.log("fetch data",response);    
                cb(response);
                this.loader=false;
      }, (error) => {
        console.log(error);
      });
  
    }

    viewdata2() {
      this.fetch2((data1) => {
        this.data2 = data1;
        // this.filteredData = data;
        var result = data1.filter(obj => {
          return obj.type == 2
        });
        this.Gnotes =result.slice(0, 10);
        console.log(this.Gnotes);
        // this.filteredData = data;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      });
    }
   
    fetch2(cb) {
      this.request.fetchgnoteById(this.userstr.m_id).subscribe((response) => {
        console.log(response);
        cb(response);
        // this.loader = false;
      }, (error) => {
        console.log(error);
      });
  
    }
    meeting() {
      this.request.fetchmeeting(this.userstr.m_id).subscribe((response) => {
    this.Meetings=response;
    this.OverallStatus=this.Meetings[0].overall_status;
    this.avggiven=this.OverallStatus[0].avg_ref_value_given;
    this.avgrec=this.OverallStatus[0].avg_ref_value_received;
    console.log(this.avggiven);
    console.log(this.OverallStatus);
      }, (error) => {
        console.log(error);
      });
    
    }
  welcomeSuccess() {
    this.toastr.success('Welcome !!!  ' +this.userstr.m_name);
  }

  statics() {
    this.request.fetchstatic(this.userstr.m_id).subscribe((response) => {
  this.Statics=response;
  this.month1=this.Statics[0].month;
  this.connectgiv=this.Statics[0].connect_given;
  this.gnoterec=this.Statics[0].gnote_received;
  console.log(this.Statics);
  console.log("mon",this.month1);
  console.log("con given",this.connectgiv);
  console.log("gnote rec",this.gnoterec);
  
    }, (error) => {
      console.log(error);
    });
  
  }

  private chart4() {
    this.barChartOptions2 = {
      series: [
        {
          name: 'Connect Given',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Gnote Received',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
       
      ],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#9aa0ac',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
        },
      },
      grid: {
        borderColor: '#9aa0ac',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        ,
        labels: {
          style: {
            colors: '#9aa0ac',
          },
        },
      },
     
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

 
  private chart1() {
    this.lineChartOptions = {
      series: [
        {
          name: 'Data 1',
          data: [80, 250, 30, 120, 260, 100, 180],
        },
        {
          name: 'Data 2',
          data: [85, 130, 85, 225, 80, 190, 120],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        foreColor: '#9aa0ac',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#6777EF', '#8B8697'],
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
        borderColor: '#9aa0ac',
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#54CA68', '#EF447C'],
          stops: [0, 50, 65, 91],
        },
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        // opposite: true,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private cardCharts() {
    this.smallBarChart = {
      chart: {
        type: 'bar',
        width: 200,
        height: 80,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
        },
      },
      series: [
        {
          name: 'income',
          data: this.sampleData,
        },
      ],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {},
        marker: {
          show: false,
        },
      },
    };
  }
  private piechart() {
    this.pieChartOptions = {
      series2: [18, 22, 14, 31, 15],
      chart: {
        type: 'donut',
        width: 280,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '22px',
                fontWeight: 600,
              },
              value: {
                show: true,
                fontSize: '16px',
                fontWeight: 400,
                color: '#9aa0ac',
              },
              total: {
                show: true,
                showAlways: false,
                label: 'Total',
                fontSize: '22px',
                fontWeight: 600,
                color: '#6777EF',
              },
            },
          },
        },
      },
      colors: ['#9A8BE7', '#2AC3CB', '#FFAA00', '#FA62BB', '#FFD000'],
      labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
  private chart2() {
    this.barChartOptions = {
      series: [
        {
          name: 'Males',
          data: [2.4, 4.65, 2.88, 2.9, 3.9, 2.2, 3, 4.1, 3.9, 3],
        },
        {
          name: 'Females',
          data: [-3.8, -3.18, -2.4, -3.7, -3.96, -2.3, -3.1, -4, -4.1, -2.8],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#6236AF', '#F02769'],
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: '80%',
          columnWidth: '30%',
          // borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        borderColor: '#9aa0ac',
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        theme: 'dark',
        x: {
          formatter: function (val) {
            return val.toString();
          },
        },
        y: {
          formatter: function (val) {
            return val.toString() + '%';
          },
        },
      },
      xaxis: {
        categories: [
          '90+',
          '80-89',
          '70-79',
          '60-69',
          '50-59',
          '40-49',
          '30-39',
          '20-29',
          '10-19',
          '0-9',
        ],
        title: {
          text: 'Percent',
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(parseInt(val, 10))) + '%';
          },
        },
      },
    };
  }

  private chart3() {
    this.stackBarChart = {
      series: [
        {
          name: 'Data 1',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Data 2',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Data 3',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'Data 4',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: 'bar',
        height: 310,
        foreColor: '#9aa0ac',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: '#9aa0ac',
      },
      xaxis: {
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
        colors: ['#F0457D', '#704DAD', '#FFC107', '#a5a5a5'],
      },
    };
  }
}
