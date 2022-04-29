import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DSDataService {
  private url = "https://taw-posts.herokuapp.com/api/posts/"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url)
  }
  getOneById(id: string){
    return this.http.get(this.url+id)
  }
}
