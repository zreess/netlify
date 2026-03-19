import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day6.0',
  imports: [FormsModule],
  templateUrl: './day6.0.html',
  styleUrl: './day6.0.css',
})
export class Day60 {

  create(data:any){
  console.log(data);
  }
}
