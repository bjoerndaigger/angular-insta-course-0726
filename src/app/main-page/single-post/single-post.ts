import { Component, input, signal } from '@angular/core';
import { Post } from '../../interfaces/post';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-single-post',
  styleUrl: './single-post.scss',
  templateUrl: './single-post.html',
})
export class SinglePost {
  postInput = input.required<Post>();

  commentInput = form(signal(''));

  addComment() {
    const comment = this.commentInput().value();
    console.log(comment);
    this.commentInput().value.set('');
  }

  toggleLike(post: Post) {
    if (post.isLiked) {
      post.isLiked = false;
      post.likes--;
    } else {
      post.isLiked = true;
      post.likes++;
    }
  }
}
