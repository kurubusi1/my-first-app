import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from './schedule/schedule.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule,
    ScheduleModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
