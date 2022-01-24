import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service'

import Swal from 'sweetalert2'
declare var $: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // สร้างตัวแปรรับข้อมูลจาก API
  dataProducts: any = []

  //สร้างตัวแปรกำหนดค่าบนฟอร์มเพิ่มสินค้า
  dataProductsAdd = {
  "ProductName":"",
  "CategoryID":"",
  "UnitPrice":"",
  "UnitInStock":"",
  "ProductPicture":""
  }

  // สร้างตัวแปรสำหรับดึงข้อมูลหมวดหมู่แสดงบนฟอร์มเพื่อแก้ไข
   dataProductsEdit = {
  "pro_id":"",
  "ProductName":"",
  "CategoryID":"",
  "UnitPrice":"",
  "UnitInStock":"",
  "ProductPicture":""
  }

  constructor(private api: ProductsService) { }

  ngOnInit(): void {
    // Read Product API
    this.fetchProducts()
  }

  // ฟังกชันก์ในการโหลดข้อมูลทั้งหมดแสดงในตาราง
  fetchProducts(){
    this.api.getProducts().subscribe((data: any) => {
      //console.log(data)
      this.dataProducts = data
    })
  }

   // ฟังก์ชันการบันทึกรายการสินค้า
   submitAddProducts(){
    if(this.dataProductsAdd.CategoryID == '' || this.dataProductsAdd.ProductName == '' || this.dataProductsAdd.UnitPrice == '' || this.dataProductsAdd.UnitInStock == ''){
      Swal.fire({
        icon: 'error',
        title: 'ป้อนข้อมูลให้ครบก่อน',
      })
    }else{
      this.api.createProducts(this.dataProductsAdd).subscribe((data: {}) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'เพิ่มสินค้าใหม่เรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500
        })
        this.fetchProducts(); // โหลดข้อมูลใหม่แสดงในตาราง
        // ปิดหน้าต่าง Modal Add สินค้า
        $("#modalAdd").modal('hide');
        // การเคลียร์ค่าจากฟอร์ม
        this.dataProductsAdd = {
          "ProductName":"",
          "CategoryID":"",
          "UnitPrice":"",
          "UnitInStock":"",
          "ProductPicture":""
        }
      });
    }
  }

  // ฟังก์ชันแสดงหน้าต่างแก้ไขข้อมูล
  editProducts(id: string){
    this.api.getProductsById(id).subscribe((data: any) => {
      // console.log(data[0].CategoryName)
      this.dataProductsEdit.pro_id = data[0]._id
      this.dataProductsEdit.CategoryID = data[0].CategoryID
      this.dataProductsEdit.ProductName = data[0].ProductName
      this.dataProductsEdit.UnitPrice = data[0].UnitPrice
      this.dataProductsEdit.UnitInStock = data[0].UnitInStock
      this.dataProductsEdit.ProductPicture = data[0].ProductPicture
      // แสดง Modal 
      $("#modalEdit").modal('show');
    });
  }

  // ฟังก์ขันสำหรับการแก้ไขข้อมูล
  submitEditProducts(){
    if(this.dataProductsEdit.CategoryID == '' || this.dataProductsEdit.ProductName == '' || this.dataProductsEdit.UnitInStock == undefined || this.dataProductsEdit.UnitPrice == undefined){
      Swal.fire({
        icon: 'error',
        title: 'ป้อนข้อมูลให้ครบก่อน',
      })
    }else{
    this.api.updateProducts((this.dataProductsEdit.pro_id), this.dataProductsEdit).subscribe((data: {}) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'แก้ไขสินค้าเรียบร้อยแล้ว',
        showConfirmButton: false,
        timer: 1500
      })
      // ซ่อน Modal
      $("#modalEdit").modal('hide');
      // โหลดรายการหมวดหมู่ใหม่
      this.fetchProducts(); // โหลดข้อมูลใหม่แสดงในตาราง
    });
    }
  }

  // ฟังก์ชันสำหรับการลบข้อมูล
  deleteProducts(id: string){

    Swal.fire({
      title: 'ยืนยันการลบรายการนี้',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#cbced4',
      confirmButtonText: 'ใช่ ลบเลย',
      cancelButtonText: 'ไม่เก็บไว้ก่อน'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ลบรายการเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500
        })
        this.api.deleteProducts(id).subscribe((data: any)=>{
          // โหลดรายการหมวดหมู่ใหม่
          this.fetchProducts(); // โหลดข้อมูลใหม่แสดงในตาราง
        });
      }
    })

  }

}
