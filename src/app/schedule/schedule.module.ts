import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


// 新たに追加 
import { ScheduleCalendarComponent } from './schedule-calendar/schedule-calendar.component';
import { ScheduleInputComponent } from './schedule-input/schedule-input.component';
import { ScheduleComponent } from './schedule.component';
// import { AuthGuard } from '../auth/shared/auth.guard';
import { ScheduleService } from './shared/schedule.service';

const routes: Routes = [
    { 
        path: 'schedules', component: ScheduleComponent,
        children: [
          { path: '', component: ScheduleCalendarComponent },
          { path: 'input', component: ScheduleInputComponent, }
    
        ]
      }

];


@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleCalendarComponent,
    ScheduleInputComponent,
],

imports: [
    
    RouterModule.forChild(routes),
    CommonModule,
    
],
providers: [
    ScheduleService,
    
  ],
  bootstrap: []
})
export class ScheduleModule { }
