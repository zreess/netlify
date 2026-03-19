import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mediatorapi } from '../mediatorapi';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todocreate',
  imports: [FormsModule],
  templateUrl: './todocreate.html',
  styleUrl: './todocreate.css',
})
export class Todocreate {

  constructor(private mediatorapi:Mediatorapi,private route:Router){}

  create(tododata:any){
    console.log(tododata);

    this.mediatorapi.saveTodo(tododata).subscribe(
      (response:any) => {
        console.log("To-Do item saved successfull:",response);
        alert("TODO is created 🤩😍🤩😍🤩😍");
        this.route.navigate(['/view']);

      },
       (error:any) => {
        console.log("error saved To-Do item:",error);
      },
    )
  }
}
