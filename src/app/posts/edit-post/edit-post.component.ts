import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { editPost } from '../state/posts.actions';
import {getPostById} from '../state/posts.selector';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit,OnDestroy {
   post : Post;
   postForm:FormGroup;
   postSubscription:Subscription;

  constructor(private activatedRoute:ActivatedRoute,private store:Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
     this.postSubscription = this.store.select(getPostById,{id}).subscribe(data =>{
      this.post = data;
      this.createForm();
      });

    })
  }

  createForm(){
    this.postForm = new FormGroup({
      title:new FormControl(this.post.title,[
      Validators.required,
      Validators.minLength(5),  
      ]),

      description:new FormControl(this.post.description,[
        Validators.required,
        Validators.minLength(5),  
        ]),
    });
  }


  showTitleErrors(){
const titleForm = this.postForm.get('title');
if(titleForm.touched && !titleForm.valid){
  if(titleForm.errors.required){
    return "Title is required.";
  } else if(titleForm.errors.minlength){
    return "Min length should be 5 character.";
  }
}
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return "Description is required.";
      }
      if (descriptionForm.errors.minlength) {
        return "Description should be min of 5 characters.";
      }
    }
  }
  onEditPost(){
    if(!this.postForm.valid){
      return;
    }
    const post:Post = {
      id:this.post.id,
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }
    this.store.dispatch(editPost({post}));
    this.router.navigate(['posts']);
  }
  ngOnDestroy(){
  if(this.postSubscription){
    this.postSubscription.unsubscribe();
  }
  }
}
