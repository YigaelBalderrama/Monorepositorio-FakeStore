import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'standar-store-home-animation',
  templateUrl: './home-animation.component.html',
  styleUrls: ['./home-animation.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
    trigger('animateLog1',[
      state('init',
      style({
        

      }))
    ]),
    // trigger('animateLog2'.[])
  ],
})
export class HomeAnimationComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  animateLog1(){

  }
  animateLog2(){
    
  }
}
