import { Component, OnInit } from '@angular/core';
import {StructuresService} from '../../services/Structures.service';
import {Structure} from '../../model/structures.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/structure.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {
  structures$:Observable<AppDataState<Structure[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  messageSuccess?:Boolean;

  constructor(private structuresService:StructuresService, private router:Router) { }

  ngOnInit(): void {
    this.onGetAllServices();
  }

  onGetAllServices() {
    this.structures$= this.structuresService.getAllServices().pipe(
        map(data=>{
          console.log(data);
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
    }

}
