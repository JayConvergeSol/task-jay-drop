import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropMainComponent } from './components/drop-main/drop-main.component';

const routes: Routes = [
  { path : '' , redirectTo: 'taskDrop' , pathMatch:'full' },
  { path : 'taskDrop' , component : DropMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskDropRoutingModule { }
