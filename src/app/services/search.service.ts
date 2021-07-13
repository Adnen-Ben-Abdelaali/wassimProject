import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchUrl : string ='http://localhost:3001/search' 

  constructor(private httpClient:HttpClient) 
  {

   }

   
  
}
