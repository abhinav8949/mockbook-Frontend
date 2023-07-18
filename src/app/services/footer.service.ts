import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  visible:boolean

  constructor() { this.visible=true }

  hide(){
    return this.visible=false
  }

  show(){
    return this.visible=true
  }

}
