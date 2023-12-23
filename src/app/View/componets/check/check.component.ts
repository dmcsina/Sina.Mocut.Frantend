import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-check',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent {
  constructor(public router:Router){}
  hide=true;
  step(){
   this.router.navigate(['login/code']);
  //  console.log(this.form.formLogin.controls.phoneNumber.value);
  }
}
