import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-information',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {
  constructor(public router :Router){}
  hide=true;
  step(){
    this.router.navigate(['login/singin']);
  }
}
