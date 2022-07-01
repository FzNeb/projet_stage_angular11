import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?:FormGroup;
  submitted:boolean=false;

  model?: NgbDateStruct;
  messageSuccess?:Boolean;

  isShown: boolean = false ;

  closeResult?: string;

  constructor(private fb:FormBuilder, private productsService:ProductsService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    });
  }

  onSaveProduct() {
  /*   this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.save(this.productFormGroup?.value)
      .subscribe(data=>{
        alert("Success Saving product");
      }); */
  }
 
  onRunIpc(){
    this.messageSuccess = true;
    this.isShown = true;

setTimeout(()=>{                           //<<<---using ()=> syntax
    this.messageSuccess = false;
    this.isShown = false;

}, 5000);

}



openXl(content:any) {
  this.modalService.open(content, { size: 'xl' });
}

}
