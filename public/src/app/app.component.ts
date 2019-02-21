import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  tasks = [];
  one_task: any;
  newTask: any;
  selectedTask: any;
  //updatedTask: any;

  constructor(private _httpService: HttpService){
  } 

  ngOnInit() {
    this.getTasks();
    this.newTask = { title: "", description: "" }
  }

  getTasks() {
    this._httpService.getTasks().subscribe(data => {
      this.tasks = data["all_tasks"];
      console.log("Got our tasks!", data);
    }); 
  }

  getOneTask(id: string) {
    this._httpService.getOneTask(id).subscribe(data => {
      this.one_task = data["one_task"];
      console.log("Got our task", data);
    });
  }

  createTask() {
    this._httpService.createTask(this.newTask).subscribe(task => {
      this.newTask = { title: " ", description: " " };
    })
    this.getTasks();
  }

  showEdit(task: any) {
    this.selectedTask = task;
    //this.updatedTask = task;
  }

  updateTask() {
    console.log(this.selectedTask);
    this._httpService.updateTask(this.selectedTask).subscribe(task => {
      this.tasks = task['data'];
      this.getTasks();
      this.selectedTask = null;
    })
  }

  deleteTask(id: string) {
    this._httpService.deleteTask(id).subscribe(task => this.tasks = task['data'])
    this.getTasks();
  }

}