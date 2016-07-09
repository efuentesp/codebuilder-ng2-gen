import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector: 'footerbar',
	templateUrl: 'app/common/footerbar/footerbar.component.html',
	directives: [	ROUTER_DIRECTIVES]
})
export class FooterbarComponent { }
