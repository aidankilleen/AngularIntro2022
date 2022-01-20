import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url = "http://localhost:3000/users";

  constructor(public httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get(this.url) as Observable<User[]>;
  }

  public updateUser(userToUpdate: User): Observable<User> {
    return this.httpClient.put(
      `${this.url}/${userToUpdate.id}`, userToUpdate) as Observable<User>;
  }

  public deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  public addUser(userToAdd: User): Observable<User> {

      return this.httpClient.post(this.url, userToAdd) as Observable<User>;
  }
}
