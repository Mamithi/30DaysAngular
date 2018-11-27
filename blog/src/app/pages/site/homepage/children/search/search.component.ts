import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from './../../../../../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts;

  searchForm = this.fb.group({
    'search_query': ['', Validators.required]
  });

  constructor(
    private post_service: PostService,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.searchForm.get('search_query').valueChanges.subscribe((searchValue) => {
      this.post_service.searchPosts(searchValue).subscribe((res) => {
        this.posts = res;
      });
    });
  }



}
