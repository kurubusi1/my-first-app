import { Component, OnInit } from '@angular/core';

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

  constructor(private scheduleService: ScheduleService ) { 
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


}
