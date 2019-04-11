import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  getTodos() {
    return this.http.get<any[]>('...');
  }

  getTodosPromise() {
    return this.http.get('...').toPromise();
  }

  delete(id) {
    return this.http.delete('...');
  }
}
