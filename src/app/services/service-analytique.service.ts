import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ServiceAnalytique} from '../model/serviceAnalytique.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAnalytiqueService {

  constructor(private http:HttpClient) { }

  getAllServicesAnalytique():Observable<ServiceAnalytique[]>{
    //let host=(Math.random()>0.2)?environment.host:environment.unreachableHost;
    let host=environment.host;
    return this.http.get<ServiceAnalytique[]>(host+"/servicesAnalytiques");
  }

  getServAnal(id:number):Observable<ServiceAnalytique>{
    let host=environment.host;
    return this.http.get<ServiceAnalytique>(host+"/servicesAnalytiques/"+id);
  }
  updateServiceAnalytique(serviceAnalytique:ServiceAnalytique):Observable<ServiceAnalytique>{
    let host=environment.host;
    return this.http.put<ServiceAnalytique>(host+"/servicesAnalytiques/"+serviceAnalytique.id,serviceAnalytique);
  }
}