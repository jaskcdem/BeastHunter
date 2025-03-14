import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincessList } from './../PrisonPrincess.const';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  list = PrincessList;
}
