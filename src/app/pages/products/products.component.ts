import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Product {
  name : string,    // product name
  desc : string,    // product description
  logoURL : string, // logo (if applicable)
  repoURL : string, // repository URL
  prodURL : string, // production URL (if applicable)
  license : string, // license (if applicable)
  font    : string, // font for title (if applicable)
}
@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productionProds : Product[];
  devProds : Product[]; 

  constructor(private title : Title) { 
    this.title.setTitle('arbitrary - products');
  }

  ngOnInit(): void {
    this.productionProds = [
      {
        name: 'testube',
        desc: `a simple web app that allows Tesla drivers to easily access fullscreen media in their cars while parked. Normally,
        doing this is a complicated process that is harder than it needs to be. Testube makes the process as easy as
        possible, ensuring you get to your media quickly.`,
        logoURL : null,
        repoURL : 'https://github.com/arbitrarydot/testube',
        prodURL : 'https://testube.app',
        license : 'GPL-3.0',
        font    : 'Cairo',
      },
      {
        name: 'Digalog',
        desc: `a simple wearOS watch face that appears analog on the surface, but integrates a digital time on the hour and minute hands for quick reference.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.arbitrary.digalog',
        license : null,
        font    : null,
      }
    ]

    this.devProds = [
      {
        name: 'sentinel',
        desc: `a free, open-source Windows, macOS, and Linux application that allows you to efficiently view, manage, and export sentry and dashcam footage from your Tesla vehicle. It does require you to have access to the USB drive containing the footage.`,
        logoURL : null,
        repoURL : 'https://github.com/arbitrarydot/sentinel',
        prodURL : null,
        license : 'GPL-3.0',
        font    : 'Quantico', 
      },
      {
        name: 'copilot',
        desc: `a one-stop-shop for managing your tesla vehicle on any of your devices.`,
        logoURL : null,
        repoURL : 'https://github.com/arbitrarydot/copilot',
        prodURL : null,
        license : null,
        font    : 'ABeeZee', 
      },
      {
        name: 'testla',
        desc: `a dummy Tesla API server for testing your 3rd-party Tesla applications.`,
        logoURL : null,
        repoURL : 'https://github.com/arbitrarydot/testla',
        prodURL : null,
        license : null,
        font    : null,
      },
      {
        name: 'tsla',
        desc: `a typescript wrapper for the official Teala REST API.`,
        logoURL : null,
        repoURL : 'https://github.com/arbitrarydot/tsla',
        prodURL : null,
        license : null,
        font    : null,
      },

    ]


  }

}
