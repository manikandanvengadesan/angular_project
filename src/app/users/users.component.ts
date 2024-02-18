import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  loggedUser = '';
  myVar = '';
  name:string = "";
  nameValue:string = '';
  stringName: string = "string interpolation enclosed with curly braces{}.";
  inputValue: string = "Property Binding";
  twoWayBind: string = "";
  buttonColor: string = '';
  Values = [{Lang:'Angular'}, {Lang:'JS'}, {Lang:'TS'}, {Lang:'HTML'}, {Lang:'CSS'}];
  constructor(private route: Router, private ser:CommonServiceService){}
  ngOnInit(): void {
   this.loggedUser = this.ser.getUserName();
  }


  onEventBind() {
    this.inputValue = "Event triggered"
  }

  changeDept(value: string) {
    this.twoWayBind = value;
  }

  changeColor(color: string) {
    this.buttonColor = color;
  }


}
