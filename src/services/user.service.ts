import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ObjectOfUsers, UsersInterface } from '../assets/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = new BehaviorSubject<ObjectOfUsers>({});
  public users$ = this.users.asObservable();

  constructor(private http: HttpClient) {}

  getUser(userId: number) {
    this.http
      .get(`https://gorest.co.in/public/v2/users/${userId}`)
      .subscribe((res: UsersInterface) => {
        this.users.next({ ...this.users, [userId]: res });
      });
  }
}
