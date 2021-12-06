import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  url="http://data.fixer.io/api/latest?access_key=b6ae0625152774c464c234c4b837549f"

  constructor(
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get(this.url);
  }

}
