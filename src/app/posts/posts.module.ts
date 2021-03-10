import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';
import { AddPostComponent } from '../posts/add-post/add-post.component';
import { EditPostComponent } from '../posts/edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    imports:[CommonModule,ReactiveFormsModule,RouterModule.forChild(routes)]
})
export class PostsModule {}