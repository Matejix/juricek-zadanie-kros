import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentsInterface } from '../assets/comments.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments = new BehaviorSubject<CommentsInterface[]>([]);
  public comments$ = this.comments.asObservable();

  constructor(private http: HttpClient) {}

  getComments(postId: number) {
    this.http
      .get(`https://gorest.co.in/public/v2/posts/${postId}/comments`)
      .subscribe((res: CommentsInterface[]) => {
        this.comments.next(res);
      });
  }
}
