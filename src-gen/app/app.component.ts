import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import "rxjs/Rx"; // Load all features

import { SidebarComponent } from './common/sidebar/sidebar.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { FooterbarComponent } from './common/footerbar/footerbar.component';

import { HomeComponent } from './home/home.component';

import { AddFideicomisoComponent } from './fideicomiso/add-fideicomiso.component';
import { EditFideicomisoComponent } from './fideicomiso/edit-fideicomiso.component';
import { FideicomisoService } from './fideicomiso/fideicomiso.service';

import { AddSubfisoComponent } from './subfiso/add-subfiso.component';
import { EditSubfisoComponent } from './subfiso/edit-subfiso.component';
import { SubfisoService } from './subfiso/subfiso.service';

import { FideicomisosComponent } from './fideicomisos/fideicomisos.component';
import { SearchFideicomisosComponent } from './searchFideicomisos/searchFideicomisos.component';
import { SubfisosComponent } from './subfisos/subfisos.component';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives: [	ROUTER_DIRECTIVES,
								SidebarComponent,
								TopbarComponent,
								FooterbarComponent,
								HomeComponent
							],
	providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS,
				FideicomisoService, SubfisoService]
})
@RouteConfig([
	{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },

	{ path: '/fideicomiso/add', name: 'AddFideicomiso', component: AddFideicomisoComponent },
	{ path: '/fideicomiso/edit', name: 'EditFideicomiso', component: EditFideicomisoComponent },
	{ path: '/fideicomisos', name: 'Fideicomisos', component: FideicomisosComponent },
	{ path: '/searchFideicomisos', name: 'SearchFideicomisos', component: SearchFideicomisosComponent },

	{ path: '/subfiso/add', name: 'AddSubfiso', component: AddSubfisoComponent },
	{ path: '/subfiso/edit', name: 'EditSubfiso', component: EditSubfisoComponent },
	{ path: '/subfisos', name: 'Subfisos', component: SubfisosComponent }
])
export class AppComponent { }
