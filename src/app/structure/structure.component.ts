import { Component, OnInit } from '@angular/core';

import {TreeNode} from 'primeng/api';

import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  providers: [MessageService],
  styleUrls: ['./structure.component.css']
  
})
export class StructureComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  data1: TreeNode[];

  selectedNode: TreeNode;



  onNodeSelect(event) {
    this.messageService.add({severity: 'success', summary: event.node.label, detail: event.node.data.name + ' ' + event.node.data.phone + ' ' + event.node.data.email});
    console.log(event.node.data.name);
    }

  ngOnInit() {


    this.data1 = [{
        label: 'Директор департамента ЦИТ',
        type: 'person',
        styleClass: 'ui-person',
        expanded: true,
        data: {name:'Ещенко Сергей Александрович', 'avatar': 'walter.jpg', phone:'8053', email: 'yeshchenko.s@luxoptica.com.ua'},
        children: [
            {
                label: 'Руководитель службы ТП и обеспечения',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Романенко Максим', 'avatar': 'saul.jpg'},
                children:[{
                    label: 'КиРС',
                    styleClass: 'department-cfo'
                },
                {
                    label: 'ОдРС',
                    styleClass: 'department-cfo'
                },
                {
                    label: 'ХаРС',
                    styleClass: 'department-cfo'
                }],
            },
            {
                label: 'Технический директор',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Кучер Виталий', 'avatar': 'mike.jpg'},
                children:[{
                    label: 'Отдел системного администрирования',
                    styleClass: 'department-coo'
                }]
            },
            {
                label: 'Директор по разработке ПО',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Порицкий Александр', 'avatar': 'jesse.jpg'},
                children:[{
                    label: 'Отдел разработки ПО',
                    styleClass: 'department-cto',
                    expanded: true                  
                },
                {
                    label: 'Отдел поддержки ПО',
                    styleClass: 'department-cto'
                }]
            },
            {
                label: 'Директор по проектам',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {name:'Славгородский Юрий', 'avatar': 'jesse.jpg'},
                children:[{
                    label: 'Офис управления проектами',
                    styleClass: 'department-cto',
                    expanded: true                  
                }]
            }
          ]
      }];


    }

}
