import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {
  constructor(public router:Router){}
  timeLeft:any=60;
  ngOnInit(): void {
    this.startTimer();
  };
  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 1) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }
  step(){
    this.router.navigate(['login/singup']);
   }
}
