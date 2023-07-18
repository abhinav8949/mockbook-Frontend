import { Component } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public _footer:FooterService){}

  ngOnInit():void{
    
  }


}
