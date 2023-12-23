import { Component } from '@angular/core';
import { Router ,RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public router :Router){}
  login(){
    this.router.navigate(['/login'])
  }
}
