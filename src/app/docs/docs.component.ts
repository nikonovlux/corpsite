import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';

import { TreeNode } from 'primeng/primeng';


// var coinImage = new Image();
// coinImage.src = "assets/img/logo_name.png";


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit  {

  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('myImg') myImg: ElementRef; 

  files: TreeNode[];
  

  ctx: CanvasRenderingContext2D;

  ngOnInit(): void {


    this.files = [
      {
        label: 'Дайджесты',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [          {
          label: 'Август',
          collapsedIcon: 'fa-folder',
          expandedIcon: 'fa-folder-open',
          children: [
            {
              label: '2018-08',
              icon: 'fa-file-o',
              data: 'assets/pdf/digest02.pdf'            
            }
          ]
        }
      ]        
      },
      {
        label: 'Инструкции',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'Заявления',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'Заявление на отпуск',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'Безопасность',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'Техника безопасности',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'Форма для отпуска',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open'
          }
        ]
      },{
        label: 'Приказы',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',        
      }
    ];


    this.ctx  = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.canvas.width=580;
    this.ctx.canvas.height=60;
    //this.ctx.rotate(45);

    this.anim(this.ctx);

  }

  anim(ctx) {

    //  ctx.drawImage(this.myImg.nativeElement, 0, 0, 241, 60, 180, 0, 361, 60);
    let fx = 0;
    let a = 1;

    setInterval (() => 
    {
      // animate
      // if(a){
      //   fx=50;
      //   a = false;
      // }else{
      //   fx=0;
      //   a = true;
      // }
      // console.log('fx-'+fx);
      // console.log('a- '+a);

      ctx.clearRect(0, 0, 580, 60);
      ctx.drawImage(this.myImg.nativeElement, 0, 0, 241, 60, fx, 0, fx+241, 60);


      
    },
    1000);
  } 

}
