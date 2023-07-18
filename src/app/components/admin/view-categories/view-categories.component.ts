import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NgToastService } from 'ng-angular-popup'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {
  
  categories=[
    {
      id:'',
      title:'',
      description:''
    }
  ]

  constructor(private _category:CategoryService, private toaster:NgToastService){}

  ngOnInit():void{
    this.viewAllCategory()
  }

  viewAllCategory(){
    this._category.getAllExamCategory()
    .subscribe((data:any)=>{
      this.categories=data;
      
    },(error)=>{
      this.toaster.error ({detail:"Error", summary:"Category not loading...!", duration:5000})
    })
  }

  deleteCategory(id:any){
    Swal.fire({
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure...want to delete this CATEGORY?'
    }).then((result)=>{
      if(result.isConfirmed){
        this._category.deleteCategoryById(id).subscribe(
          (data)=>{
            Swal.fire("Category Deleted",'Oops this category wont recover.','success')
            this.toaster.success ({detail:"Success", summary:"Category Deleted Successfully", duration:5000}) 
            this.viewAllCategory()
          },
          (err)=>{
            Swal.fire("Error", "Server Error", 'error')
            this.toaster.error ({detail:"Error", summary:"Category Not Deleted", duration:5000}) 
          })
      }
    })
  }
    

}
