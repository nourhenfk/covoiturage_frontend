import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/auth/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getAllUsers`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUserById/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/createUser`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/updateUser/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteUser/${id}`);
  }
  getUsersByTeam(teamId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getUsersByTeam/${teamId}`);
  }
}
