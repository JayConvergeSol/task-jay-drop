import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDropRoutingModule } from './task-drop-routing.module';
import { DropMainComponent } from './components/drop-main/drop-main.component';
import { ButtonModule } from 'primeng/button';
import { AllConditionComponent } from './shared/dialogs/all-condition/all-condition.component';
import { AddConditionComponent } from './shared/dialogs/add-condition/add-condition.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    DropMainComponent,
    AllConditionComponent,
    AddConditionComponent,

  ],
  imports: [
    CommonModule,
    TaskDropRoutingModule,
    ButtonModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers:[DialogService]
})
export class TaskDropModule { }
