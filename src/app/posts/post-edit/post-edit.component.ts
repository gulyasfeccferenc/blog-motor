import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  postTitle: string;
  postContent: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendToCreate() {
    this.http.post('http://localhost:3000/api/posts', { title: this.postTitle, content: this.postContent }).subscribe(e => {
      console.log(e);
    });
  }

}
