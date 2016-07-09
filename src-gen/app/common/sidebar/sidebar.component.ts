import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector: 'sidebar',
	templateUrl: 'app/common/sidebar/sidebar.component.html',
	directives: [	ROUTER_DIRECTIVES]
})
export class SidebarComponent { }
