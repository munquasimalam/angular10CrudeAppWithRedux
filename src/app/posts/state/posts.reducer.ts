import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { addPost, deletePost, editPost } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(editPost, (state, action) => {
    let updatedPost = state.posts.map(post => {
      return action.post.id === post.id ? action.post : post;
    })
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state, { id }) => {
    let updatedPost = state.posts.filter(post => {
      return post.id !== id;
    })

    return {
      ...state,
      posts: updatedPost,
    }
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
