import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // 🔥 Fetch data from API (Experiment requirement)
  getPosts(): Promise<any[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .catch(error => {
        console.error('API Error:', error);
        return [];
      });
  }
}
