import { Component, OnInit } from '@angular/core';

import { AboutUs } from './shared/about-us.model';
import { AboutUsService } from './shared/about-us.service';

@Component({
	moduleId: module.id,
	selector: 'about-us',
	templateUrl: 'about-us.component.html',
	providers: [AboutUsService]
})
export class AboutUsComponent implements OnInit {
	aboutUs: AboutUs[] = [];

	constructor(private aboutUsService: AboutUsService) {}

	ngOnInit() {}
}
