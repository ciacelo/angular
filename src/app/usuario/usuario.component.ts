import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  names: string[];
  constructor() { 
    this.names = ['Mary', 'Joe', 'Bill', 'Anna']
  }

  ngOnInit() {
  }

}
