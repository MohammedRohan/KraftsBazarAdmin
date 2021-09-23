import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  addp (xyz:any){
    return this.http.post("http://localhost:5555/addproduct",{"data":xyz})
  }
}
