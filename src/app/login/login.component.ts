import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');
  }

  @ViewChild('diagram') canvas: ElementRef
  public context: CanvasRenderingContext2D;


  metrics = 3; //1-Евклидова, 2-Манхэттенская, 3-Минковского
  numPoints = 0;
  X=new Array()
  Y=new Array()
  C=new Array()

 
   randomNumber (max) {
    return Math.floor(Math.random()*max)
    }
 
   randomColor() {
    return "#"+
      ("00"+(51+this.randomNumber(205)).toString(16)).slice(-2)+
      ("00"+(51+this.randomNumber(205)).toString(16)).slice(-2)+
      ("00"+(51+this.randomNumber(205)).toString(16)).slice(-2)
    }
 
   Metric (x, y) {
    if (this.metrics==1) { return Math.sqrt(x*x + y*y); }
    if (this.metrics==2) { return Math.abs(x) + Math.abs(y); }
    if (this.metrics==3) { return(Math.pow(Math.pow(Math.abs(x),3) + Math.pow(Math.abs(y),3),0.33333)); }
    }
 
   Diagram() {
 
    let width= 600
    let height= 600
    let dist0,j
    let dist1=dist0=j=0

    let width1=width-2
    let height1=height-2;

    this.context.fillStyle="white"; 
    this.context.fillRect(0,0,width,height);

    for (var y=0; y<height1; y++) {
      for (var x=0; x<width1; x++) {
      dist0=this.Metric (height1,1); 
      j = -1;
      for (var i=0; i<this.numPoints; i++) {
        dist1 = this.Metric (this.X[i]-x, this.Y[i]-y);
        if (dist1 < dist0) { dist0=dist1; j=i; }
      }
      this.context.fillStyle=this.C[j]; 
      this.context.fillRect(x,y,1,1);
      }
   }  
   this.context.fillStyle="black";   
   for (var i=0; i<this.numPoints; i++) {
    this.context.fillRect (this.X[i], this.Y[i], 3, 3);
   }
   this.context.fillText("Hello World",this.X[i], this.Y[i]);
  }
 
  onClick(event) {
    
    let x = event.clientX
    let y = event.clientY
    for (var i=0; i<this.X.length; i++) {
      if (Math.sqrt(Math.pow(this.X[i]-x,2)+Math.pow(this.Y[i]-y,2))<5) {
        this.context.fillStyle="red";
        this.context.fillRect (this.X[i]-2, this.Y[i]-2, 7, 7);
        this.context.fillStyle="black";
        this.context.fillRect (this.X[i], this.Y[i], 3, 3);
      return;
      }
    }

    this.X[this.numPoints] = x;
    this.Y[this.numPoints] = y;
    this.C[this.numPoints] = this.randomColor();
    this.numPoints++;
    this.Diagram();
  }


}
