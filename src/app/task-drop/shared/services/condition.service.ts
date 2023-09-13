import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConditionService {
  constructor() {}

  
  data:any={

    "active": true,

    "all_layouts": true,

    "condition_map": "",

    "conditions": [
        {
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
            "name": "Number equals Constant 1690865954",
            "artifact_guid": "00000000-0000-0000-0000-000000000000"
        },
        {

            "value_type_left": "Constant",

            "value_type_right": 0,

            "negate": false,

            "comparison_operator": "Equals",

            "value_left": 1042886,

            "value_right_1": 123,

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

            "artifact_id": 1043176,

            "name": "Number equals Constant 1690590589",

            "artifact_guid": "00000000-0000-0000-0000-000000000000"

        },

        {

            "value_type_left": "Constant",

            "value_type_right": 0,

            "negate": false,

            "comparison_operator": "Equals",

            "value_left": 24072023,

            "value_right_1": 123,

            "condition_type": {

                "code_type_id": 0,

                "order": 0,

                "artifact_id": 0,

                "artifact_guid": "2e406b19-0a25-4139-8d9a-3ec4397ccab1"

            },

            "object_type": {

                "artifact_type_id": 0,

                "object_type_id": 1035231,

                "object_type_name": "Document"

            },

            "logic_ids": [

                1042938

            ],

            "artifact_id": 1043178,

            "name": "Number equals Constant",

            "artifact_guid": "00000000-0000-0000-0000-000000000000"

        },

        {

            "value_type_left": "SystemValue",

            "value_type_right": "Field",

            "negate": false,

            "comparison_operator": "Between",

            "value_left": 2,

            "value_right_1": 0,

            "value_right_2": 0,

            "condition_type": {

                "code_type_id": 0,

                "order": 0,

                "artifact_id": 0,

                "artifact_guid": "2e406b19-0a25-4139-8d9a-3ec4397ccab1"

            },

            "object_type": {

                "artifact_type_id": 0,

                "object_type_id": 1035231,

                "object_type_name": "Document"

            },

            "logic_ids": [

                1042938

            ],

            "artifact_id": 1043242,

            "name": "simpleconditiontest1",

            "artifact_guid": "00000000-0000-0000-0000-000000000000"

        }

    ],

    "logical_operator": {

        "code_type_id": 0,

        "order": 0,

        "artifact_id": 1042933,

        "name": "AND",

        "text_identifier": "AND",

        "artifact_guid": "d75675e8-a13d-4ed4-b4ae-87785b65581e"

    },

    "object_type": {

        "artifact_id": 1035231,

        "name": "Document",

        "text_identifier": "Document",

        "artifact_guid": "15c36703-74ea-4ff8-9dfb-ad30ece7530d"

    },

    "post_save_cache": false,

    "specific_layouts": [],

    "timing": {

        "code_type_id": 0,

        "order": 0,

        "artifact_id": 1042953,

        "name": "Pre Load",

        "text_identifier": "Pre Load",

        "artifact_guid": "ab9cc5bd-8ddf-4000-b6cc-de0bd0fc132d"

    },

    "artifact_id": 1042938,

    "name": "Backbone Pre-Load Morissettehaven",

    "text_identifier": "Backbone Pre-Load Morissettehaven",

    "artifact_guid": "00000000-0000-0000-0000-000000000000"

}


  addCondition(data:any){
    this.data.conditions.push(data)
  }
}
