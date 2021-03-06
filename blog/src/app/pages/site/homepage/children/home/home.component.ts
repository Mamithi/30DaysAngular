import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  links;
  meta: any;
  page;


  constructor(
    private post_service: PostService,
  ) { }

  ngOnInit(): void {
    this.post_service.getPosts().subscribe((res: any) => {
      this.data = res.data;
      this.links = res.links;
      this.meta = res.meta;
    });
    this.page = 'home';
    this.goToPageSelected(1);
  }

  goToPageSelected(pageNumber: number) {
    if (pageNumber) {
      this.post_service.getPaginatedPosts(pageNumber).subscribe(
        (res: any) =>
          this.data = res.data
      );
    }
  }

  fetchSearchedPosts() {
    console.log('Helooooooooooooooooooooooooooo');
  }


}

