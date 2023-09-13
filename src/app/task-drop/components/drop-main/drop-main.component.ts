import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AllConditionComponent } from '../../shared/dialogs/all-condition/all-condition.component';

@Component({
  selector: 'app-drop-main',
  templateUrl: './drop-main.component.html',
  styleUrls: ['./drop-main.component.css']
})
export class DropMainComponent {
  
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService ){}

  show() {
    this.ref = this.dialogService.open(AllConditionComponent, {
        header: 'Select a Product',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });

    // this.ref.onClose.subscribe((product: Product) => {
    //     if (product) {
    //         this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    //     }
    // });

    // this.ref.onMaximize.subscribe((value) => {
    //     this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    // });
  }

}
