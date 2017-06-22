import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about';
import { EdituserComponent } from './about/edit-user';
import { AdduserComponent } from './about/add-user';
import { HomeComponent } from './home/home';

const appRoutes: Routes =[
{
	path:'app.component',
	component:AppComponent
},

{
	path:'about',
	component:AboutComponent
},

{
	path:'home',
	component:HomeComponent
},


{
	path:'edit-user/:id',
	component:EdituserComponent
},

{
	path:'add-user',
	component:AdduserComponent
},
];


export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);	
