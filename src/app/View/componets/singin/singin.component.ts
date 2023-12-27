import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.scss'
})
export class SinginComponent {
  constructor(public router :Router){}
  hide=true;
    step(){
      this.router.navigate(['home']);
    }
}
