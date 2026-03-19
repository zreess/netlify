import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mediatorapi } from '../mediatorapi';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-day8',
  imports: [JsonPipe, FormsModule],
  templateUrl: './day8.html',
  styleUrl: './day8.css',
})
export class Day8 {

  constructor(private rut: ActivatedRoute, private mediator: Mediatorapi, private rot: Router) { }

  idnum: any;
  mydata: any;

  ngOnInit(): void {
    alert("todo edit page - In a real app, this world be a form to a ");
    const id = this.rut.snapshot.paramMap.get('id');
    console.log("editing todo eith id " + id);
    this.idnum = id;
    this.mediator.getTodosById(this.idnum).subscribe((data: any) => {
      console.log(data);
       this.mydata = data;
    });
  }



    saveTodo(){
      console.log("updated  🤩😍🤩😍🤩😍", this.mydata);

      this.mediator.updateTodo(this.idnum, this.mydata).subscribe(() => {
          alert("updated confirm 🤩😍🤩😍🤩😍!!!!!!!!!! ");
          this.rot.navigate(['/view']);
          // console.log(res);
        }
      )};

    }
  






