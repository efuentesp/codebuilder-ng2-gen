import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector: 'topbar',
	templateUrl: 'app/common/topbar/topbar.component.html',
	directives: [	ROUTER_DIRECTIVES]
})
export class TopbarComponent { }
