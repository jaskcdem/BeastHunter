import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TextBoardComponent } from './text-board/text-board.component';

export const routes: Routes = [
  {
    path: 'text-board',
    component: TextBoardComponent
  },
  {
    path: '',
    component: AppComponent
  }
];
