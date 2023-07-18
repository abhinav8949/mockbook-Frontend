import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../data-type/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getAllExamCategory(){
    return this.http.get(`${baseUrl}/category/`)
  }

  public getCategoryById(id:any){
    return this.http.get(`${baseUrl}/category/${id}`)
  }

  public saveCategoryData(data:any){
    return this.http.post(`${baseUrl}/category/`, data)
  }

  public updateOldCategoryData(data:any){
    return this.http.put(`${baseUrl}/category`, data)
  }

  public deleteCategoryById(id:any){
    return this.http.delete(`${baseUrl}/category/${id}`)
  }


}
