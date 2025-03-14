import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { Todo, TodoService } from './todo.service';
import { HomeComponent } from './home/home.component';
import { TextBoardComponent } from './text-board/text-board.component';
import { TableComponent } from './table/table.component';
import { TodoListComponent } from './todo-list/todo-list.component';

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
    path: 'todo',
    children: [
      // {
      //   path: 'completed',
      //   component: TodoListComponent
      // },
      // {
      //   path: 'active',
      //   component: TodoListComponent
      // },
      {
        path: '',
        component: TodoListComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  /*{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }*/
];
