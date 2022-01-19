import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url = "http://localhost:3000/users";
  
  constructor(private httpClient: HttpClient) { 

  }

  getUsers():Observable<User[]> {
    return this.httpClient.get(this.url) as Observable<User[]>;
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get(`${this.url}/${id}`) as Observable<User>
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  updateUser(userToUpdate: User): Observable<User> {
      return this.httpClient.put(`${this.url}/${userToUpdate.id}`, 
        userToUpdate) as Observable<User>;
  }

  addUser(newUser: User): Observable<User> {
    return this.httpClient.post(this.url, newUser) as Observable<User>;
  }

  testAjaxCall() {
    fetch(this.url)
      .then(data=>data.json())
      .then(users=>{
        console.log(users);
      });
  }

  testHttpClientCall() {
    this.httpClient.get(this.url)
      .subscribe((result) => {

        console.log(result);
      });
  }
}
