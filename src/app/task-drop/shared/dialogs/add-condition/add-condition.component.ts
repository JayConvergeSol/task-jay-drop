import { Component } from '@angular/core';
import { ConditionService } from '../../services/condition.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-condition',
  templateUrl: './add-condition.component.html',
  styleUrls: ['./add-condition.component.css']
})
export class AddConditionComponent {
  value: string = '';

  constructor(
    private conditionService:ConditionService,
    private ref : DynamicDialogRef
  ){}

  sendData(data:any){
    let formttedData = {
      "value_type_left": "Constant",
      "value_type_right": 0,
      "negate": false,
      "comparison_operator": "Equals",
      "value_left": 1042886,
      "value_right_1": 159753,
      "condition_type": {
          "code_type_id": 0,
          "order": 0,
          "artifact_id": 0,
          "artifact_guid": "2e406b19-0a25-4139-8d9a-3ec4397ccab1"
      },
      "object_type": {
          "artifact_type_id": 0,
          "object_type_id": 1035231
      },
      "logic_ids": [
          1042938
      ],
      "artifact_id": 1043175,
      "name": data,
      "artifact_guid": "00000000-0000-0000-0000-000000000000"
    }
    this.conditionService.addCondition(formttedData)
    this.ref.close(formttedData);
  }
}
