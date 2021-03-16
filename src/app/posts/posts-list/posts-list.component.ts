import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { getPosts } from '../state/posts.selector';
import { deletePost, loadPosts } from '../state/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }
  onDeletePost(id: string) {
    console.log(id)
      this.store.dispatch(deletePost({ id }));
      this.router.navigate(['posts']);

  }

}
