import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  names = [
    "Ana",
    "John",
    "Mark",
    "Mariet"
  ];

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Belo Horizonte", state: "MG" },
    { name: "Rio de Janeiro", state: "RJ" },
    { name: "Vitoria", state: "ES" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
