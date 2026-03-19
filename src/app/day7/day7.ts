import { Component } from '@angular/core';
import { Mediatorapi } from '../mediatorapi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day7',
  imports: [],
  templateUrl: './day7.html',
  styleUrl: './day7.css',
})
export class Day7 {

mydata:any;
  constructor(private mediator:Mediatorapi,private rot:Router){}

  // constructor(private mediator:Mediatorapi){}

  ngOnInit():void{

    this.mediator.getTodos().subscribe((data: any) => {
      console.log(data);
      this.mydata = data;
    });
  }

  deleteTodo(id: number){
    console.log("Deleting TODO with id "+ id);
    this.mediator.deleteTodos(id).subscribe((response: any) =>{
    console.log(response);

    alert("TODO DELETED 🤩😍🤩😍🤩😍");
  
  this.ngOnInit();
  });
}


editTodo(id: number){
    console.log("Deleting TODO with id "+ id);
    this.mediator.getTodosById(id).subscribe((response: any) =>{
    console.log(response);

    alert("Editing todo with id  🤩😍🤩😍🤩😍" +id);
    this.rot.navigate(['/edit',id])
  // this.ngOnInit();
  });
}

}
