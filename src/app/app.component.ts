import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincessList } from './PrisonPrincess.const';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'BeastHunter';
  list = PrincessList;
}
