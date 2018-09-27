import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Awesome - Hello second component');

    this.meta.addTag({name: 'description', content: 'Super second teleport meta tag'});
    this.meta.addTag({name: 'keywords', content: 'Second page'});
  }

}
