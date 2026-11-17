import { Component, input } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  imports: [],
  selector: 'app-single-post',
  styleUrl: './single-post.scss',
  templateUrl: './single-post.html',
})
export class SinglePost {
  postInput = input.required<Post>();

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
