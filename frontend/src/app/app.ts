import { Component, signal, inject} from '@angular/core';
import { TodoEntityControllerApi } from './api/todo_api';
import { EntityModelTodoDto, CollectionModelEntityModelTodoDto } from './api/todo_api';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ohauru-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'OhAuRu';
   private readonly api = inject(TodoEntityControllerApi);
  todos = signal<CollectionModelEntityModelTodoDto | null>(null);

  constructor() {
    console.info("App Constructor")
    this.api.getCollectionResourceTodoGet1().subscribe({
      next: (res) => this.todos.set(res),
      error: (err) => console.error('Fehler:', err)
    });
  }}
