import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;
  private urlAdd: string;

  constructor(private http: HttpClient) {
      this.userUrl = 'http://localhost:8080/api/users';
      this.urlAdd = 'http://localhost:8080/api/users/add';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.urlAdd, user);
  }
}
