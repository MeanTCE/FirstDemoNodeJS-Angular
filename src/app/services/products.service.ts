import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantService } from './common/constant.service';

//Model
import { ProductsModel } from '../models/category.model';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

    //Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }

  constructor(private http: HttpClient, private constant: ConstantService) { }

  // อ่านข้อมูล Category ทั้งหมด (Method GET)
  getProductsCat(): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(this.constant.baseAPIURL + 'categories')
  }

  // อ่านข้อมูล Products ทั้งหมด (Method GET)
  getProducts(): Observable<ProductsModel>{
    return this.http.get<ProductsModel>(this.constant.baseAPIURL + 'products')
  }

  // อ่านข้อมูล Products By ID (Method GET)
  getProductsById(id: string): Observable<ProductsModel> {
    return this.http.get<ProductsModel>(this.constant.baseAPIURL + 'products/'+id)
  }

  // เพิ่มข้อมูลสินค้าใหม่ (Method POST)
  createProducts(products: any): Observable<ProductsModel> {
    return this.http.post<ProductsModel>(this.constant.baseAPIURL + "create_products", JSON.stringify(products), this.httpOptions)
  }

  // แก้ไขข้อมุล Products (Method PUT)
  updateProducts(id: string, products: any): Observable<ProductsModel> {
    return this.http.put<ProductsModel>(this.constant.baseAPIURL + "edit_products/"+id, JSON.stringify(products), this.httpOptions) 
  }

  // ลบรายการ Products (Method DELETE)
  deleteProducts(id: string){
    return this.http.delete<ProductsModel>(this.constant.baseAPIURL + "delete_products/"+id,  this.httpOptions)
  }
}
