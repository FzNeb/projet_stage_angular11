import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Structure} from '../model/structures.model';


@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  constructor(private http:HttpClient) { }

  getAllServices():Observable<Structure[]>{
    //let host=(Math.random()>0.2)?environment.host:environment.unreachableHost;
    let host=environment.host;
    return this.http.get<Structure[]>(host+"/structures");
  }


}
