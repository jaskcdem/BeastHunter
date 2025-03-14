import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextBoardComponent } from './text-board/text-board.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  {
    path: 'text-board',
    component: TextBoardComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
