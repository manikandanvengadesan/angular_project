import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  userName: string = '';
  constructor() { }

  setUserName(value:string) {
    this.userName = value;
  }


  getUserName() {
    return this.userName;
  }
}
