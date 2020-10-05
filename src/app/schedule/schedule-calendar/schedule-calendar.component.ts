// import { AuthService } from './../../auth/shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ENETRESET } from 'constants';
import { ScheduleInputComponent } from '../schedule-input/schedule-input.component';

// import { schedules } from '../schedules';
import { ScheduleService } from '../shared/schedule.service';

declare function  getNow(): void;
  


@Component({
  selector: 'app-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss'],
  // template: 
  // `<div>
  //   <p>Today is {{today | date}}</p>
  //   <p>Or if you prefer, {{today | date:'fullDate'}}</p>
  //   <p>The time is {{today | date:'jmZ'}}</p>
  // </div>`

})
export class ScheduleCalendarComponent implements OnInit {

  today: number = Date.now();

  schedules: any 

  errors: any = []

  public inputPlans: string[] =[
    '仕事', '休暇'
  ];

  constructor(
    private scheduleService: ScheduleService,
    private router: Router,
    // private authService: AuthService,

  ) { 
}
  
  ngOnInit(): void {
    getNow();
    // this.schedules = this.scheduleService.getSchedules();

    const schedulesObservable = this.scheduleService.getSchedules();
    schedulesObservable.subscribe(
      (data) => {
        this.schedules = data; 
      },
      (err) => { console.log('次のエラーが発生しました:' + err) }
    )

  }


  input(inputForm) {
    this.scheduleService.input(inputForm.value).subscribe(
      (result) => {
        console.log('Success!')
        this.router.navigate(['/schedules'])
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        this.errors = err.error.errors
      }
    )
    console.log(inputForm.value)
  }
}






// input(inputForm) {
//   this.scheduleService.input(inputForm.value).subscribe(
//       (result) => {
//           console.log('Success!')
//           this.router.navigate([''])
//       },
//       (err: HttpErrorResponse) => {
//           console.error(err)
//           this.errors = err.error.errors

//       }
//   )
//   console.log(inputForm.value)
// }
