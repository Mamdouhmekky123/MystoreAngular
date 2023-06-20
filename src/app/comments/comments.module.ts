import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [CommentComponent, CommentFormComponent, CommentsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommentsComponent, CommentComponent, CommentFormComponent],
})
export class CommentsModule {}
