import {Component,ElementRef,Renderer,HostListener,ContentChild,AfterContentInit,ViewChild} from '@angular/core';
import {InputRefDirective} from './circulation.component'



@Component({
  selector: 'app-auth',
  template: `
            <div class="container">            
            <ng-content select="h2" ></ng-content>
            <h3>Header</h3>
            <input type="email" placeholder="Email">
            <ng-content select="button" conchild></ng-content>           
            </div>
          `
})
export class AuthComponent implements AfterContentInit { 

  constructor(private el: ElementRef, private renderer: Renderer) {}

  arr = ['red','green','blue']
  num = 1

  @HostListener('click')
    onClick = () => {    
      this.ChangeBgColor(this.arr[this.num % 3])
      this.num = this.num + 1
    }

  ChangeBgColor(color: string) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }
 
  @ContentChild(AuthComponent) contentChild: AuthComponent;
  @ContentChild(InputRefDirective) inputRefDirective: InputRefDirective;  

  ngAfterContentInit() {
      console.log('---child---');
      console.log(this.contentChild)
      console.log(this.inputRefDirective)      

  }


}