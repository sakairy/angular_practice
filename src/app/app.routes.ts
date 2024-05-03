import { Routes } from '@angular/router';
import { HelloComponent } from './content/hello/hello.component';
import { GraphMenuComponent } from './content/graph-menu/graph-menu.component';

export const routes: Routes = [
	{
		path: "hello",
		component: HelloComponent,
	},
	{
		path:"graph-menu",
		component:GraphMenuComponent,
	},




    {
		path: "**",
		component: HelloComponent,
	}
];
