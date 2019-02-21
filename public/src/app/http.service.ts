import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks() {
    console.log('rabbit');
    return this._http.get('/tasks');
  }

  getOneTask(id) {
    return this._http.get('/tasks/'+id);
  }

  createTask(task: any){
    return this._http.post('/tasks', task);
  }

  updateTask(task:any){
    return this._http.put('/tasks/'+ task._id, task);
  }

  deleteTask(id:string){
    return this._http.delete('/tasks/'+ id);
  }
}