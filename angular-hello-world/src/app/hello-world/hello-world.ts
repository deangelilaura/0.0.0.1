import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [CommonModule],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})
export class HelloWorld implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

