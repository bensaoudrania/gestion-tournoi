import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  constructor(
    private router : Router
  ) {}

  ngOnInit(): void {

  }
  cancel() : void {
this.router.navigate(['articles']);
  }
}
