import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  imports: [CommonModule, RouterOutlet, HelloWorld],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})
export class HelloWorld {

}
