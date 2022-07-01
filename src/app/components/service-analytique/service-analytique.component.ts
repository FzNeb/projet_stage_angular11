import { Component, OnInit } from '@angular/core';

import {ServiceAnalytiqueService} from '../../services/service-analytique.service';
import {ServiceAnalytique} from '../../model/serviceAnalytique.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/structure.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-analytique',
  templateUrl: './service-analytique.component.html',
  styleUrls: ['./service-analytique.component.css']
})
export class ServiceAnalytiqueComponent implements OnInit {
  servicesAnalytiques$:Observable<AppDataState<ServiceAnalytique[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  messageSuccess?:Boolean;

  constructor(private serviceAnalytiqueService:ServiceAnalytiqueService, private router:Router) { }

  ngOnInit(): void {
    this.onGetAllServicesAnalytique();
  }

  onGetAllServicesAnalytique() {
    this.servicesAnalytiques$= this.serviceAnalytiqueService.getAllServicesAnalytique().pipe(
        map(data=>{
          console.log(data);
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
    }

    onEdit(s: ServiceAnalytique) {

      this.router.navigateByUrl("/editServiceAnalytique/"+s.id);
    }

   

}
