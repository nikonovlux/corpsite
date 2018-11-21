import { Component } from '@angular/core';


@Component({
  selector: 'app-loader',
  template: `<div class="loader"></div>`,
  styles: [`.loader{
                        border: 16px solid white;
                        border-radius: 50%;
                        border-top: 16px solid green;
                        width: 80px;
                        height: 80px;
                        -webkit-animation: spin 2s linear infinite; /* Safari */
                        animation: spin 2s linear infinite;
                    }
            /* Safari */
            @-webkit-keyframes spin {
                        0% { -webkit-transform: rotate(0deg); }
                        100% { -webkit-transform: rotate(360deg); }
                    }
            /* anim */
            @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
            `]
})
export class LoaderComponent {
    constructor(){
        console.log('loader loaded')
    }
}

/* ---
            
            .loader1,.loader1:after{
                border-radius:50%;
                width:50px;
                height:50px}
            .loader1{
                font-size:10px;
                position:relative;
                border-top:1.1em solid rgba(0,0,0,.2);
                border-right:1.1em solid rgba(0,0,0,.2);
                border-bottom:1.1em solid rgba(0,0,0,.2);
                border-left:1.1em solid #000;
                -webkit-transform:translateZ(0);
                -ms-transform:translateZ(0);
                transform:translateZ(0);
                -webkit-animation:spin 1.1s infinite linear;
                animation:spin 1.1s infinite linear}
            @-webkit-keyframes spin{
                0%{
                  -webkit-transform:rotate(0deg);
                  transform:rotate(0deg)}
                100%{
                  -webkit-transform:rotate(360deg);
                  transform:rotate(360deg)}}
            @keyframes spin{
                0%{
                  -webkit-transform:rotate(0deg);
                  transform:rotate(0deg)}
                100%{
                  -webkit-transform:rotate(360deg);
                  transform:rotate(360deg)}}
            
        -- */