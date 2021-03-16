import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';
import { AddPostComponent } from '../posts/add-post/add-post.component';
import { EditPostComponent } from '../posts/edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { POST_STATE_NAME } from './state/posts.selector';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../posts/state/posts.effect';

const routes:Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [{ path: 'add', component: AddPostComponent },
        { path: 'edit/:id', component: EditPostComponent }
        ],
      }, 
]
@NgModule({
    declarations:[ PostsListComponent,
        AddPostComponent,
        EditPostComponent],
    imports:[CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POST_STATE_NAME,postsReducer),
        EffectsModule.forFeature([PostsEffects])
    ]
})
export class PostsModule {}