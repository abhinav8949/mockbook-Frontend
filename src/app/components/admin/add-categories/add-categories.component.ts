import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {

  addCategoryData={
    title:'',
    description:''
  }

  constructor(private _category:CategoryService, private toaster:NgToastService){}

  ngOnInit():void{
    
  }


  addCategory(){
    this._category.saveCategoryData(this.addCategoryData)
    .subscribe((data)=>{
      this.addCategoryData.title=''
      this.addCategoryData.description=''
      this.toaster.success({detail:"Sucess", summary:"Category Added Successfully", duration:5000}) 
    },(error)=>{
      Swal.fire("Problem in Add_Category", "Server Error", 'error')      
      this.toaster.error({detail:"Oops...", summary:"Server Error", duration:5000}) 
    })
  }
}
