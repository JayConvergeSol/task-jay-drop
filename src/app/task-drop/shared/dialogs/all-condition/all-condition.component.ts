import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConditionService } from '../../services/condition.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddConditionComponent } from '../add-condition/add-condition.component';

@Component({
  selector: 'app-all-condition',
  templateUrl: './all-condition.component.html',
  styleUrls: ['./all-condition.component.css'],
})
export class AllConditionComponent {
  ref: DynamicDialogRef | undefined;
  allConditions:any[] = [];
  selectedCondition1 :any = "Number equals Constant 1690590589"; 
  selectedCondition2 = "Number equals Constant 1690865954" ; 
  newCondition = ''; 
  Conditionforms = new FormGroup({    
    Condition1: new FormControl(),
    Condition2: new FormControl(),
    addCondition: this._formBuilder.array([])
  });

  defaultvalue(conditionNo:number, value:string){
    if(conditionNo == 1){
      this.selectedCondition1 = this.allConditions.find((condition:any) => condition.name == value);
      console.log(this.selectedCondition1);
      
    }else{
      this.selectedCondition2 = this.allConditions.find((condition:any) => condition.name == value);
    }
  } 

  get addConditionArray(): FormArray {
    return this.Conditionforms.get('addCondition') as FormArray;
  }
  
  addOneCondition() {
    // const newExistingCondition = new FormGroup({
    //   newCondition: new FormControl(),
    // });
    // this.addConditionArray.push(newExistingCondition);
    const newCondition = new FormControl()
    
    this.addConditionArray.push(newCondition);
    
  }
  
  removeOneCondition(index: number) {
    this.addConditionArray.removeAt(index);
  }

  constructor(
    public refs: DynamicDialogRef,
    public dialogService: DialogService,
    public config: DynamicDialogConfig,
    private conditionService: ConditionService,
    private _formBuilder: FormBuilder,
  ) {}
  
  ngOnInit() {
   this.fetchAllCondition()
   this.Conditionforms.controls.Condition1.setValue(this.selectedCondition1);
   this.Conditionforms.controls.Condition2.setValue(this.selectedCondition2);

   this.defaultvalue(1,this.selectedCondition1)
   this.defaultvalue(2,this.selectedCondition2)
  }

  fetchAllCondition(){
    this.allConditions = this.conditionService.data.conditions;
    console.log(this.allConditions);
  }

  submitFormData(data:any){
    console.log(data)
  }

  createCondition(){
    this.ref = this.dialogService.open(AddConditionComponent, {
      header: 'Create new Condition',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
  });

  this.ref.onClose.subscribe((res:any)=>{
    this.addConditionArray.push(new FormControl(res));
  
    if(res){
      this.allConditions.push(res);
    }
  })
  }
 

  displayDropValue(index:any){
    let expectedCondition : any = this.Conditionforms.controls['addCondition'].value[index];
    if(expectedCondition){
      return expectedCondition.name;
    }
  }
}
