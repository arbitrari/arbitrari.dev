import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('branding • arbitrari')
  }

  ngOnInit(): void {
  }

}
