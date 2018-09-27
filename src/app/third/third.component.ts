import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformServer} from '@angular/common';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Awesome - Hello third component');

    this.meta.removeTag('viewport');
    this.meta.addTags([
      {
        name: 'description', content: '3 page'
      }
    ]);
  }

}
