import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceAnalytiqueService } from '../../services/service-analytique.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-serv-anal-edit',
  templateUrl: './serv-anal-edit.component.html',
  styleUrls: ['./serv-anal-edit.component.css']
})
export class ServAnalEditComponent implements OnInit {
  
  analServId:number;
  analServFormGroup?:FormGroup;
  private submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private serviceAnalytiqueService:ServiceAnalytiqueService,
              private fb:FormBuilder) {
    this.analServId=activatedRoute.snapshot.params.anal_id;
  }

  ngOnInit(): void {
    this.serviceAnalytiqueService.getServAnal(this.analServId)
      .subscribe(analServ=>{
        this.analServFormGroup=this.fb.group({
          id:[analServ.id,Validators.required],
          anal_str:[analServ.anal_str,Validators.required],
          anal_region:[analServ.anal_region,Validators.required],
          anal_service:[analServ.anal_service,Validators.required],
          anal_anal:[analServ.anal_anal,Validators.required]         
        })
      });

      
  }

  onUpdateServiceAnalytique() {
    this.serviceAnalytiqueService.updateServiceAnalytique(this.analServFormGroup?.value)
      .subscribe(data=>{
        alert("Success ServiceAnalytique updated");
      });
  }
 

}
