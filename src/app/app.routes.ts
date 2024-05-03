import { Routes } from '@angular/router';
import { HelloComponent } from './content/hello/hello.component';

export const routes: Routes = [
    {
        path: "hello",
        component: HelloComponent,
    },
    {
        path:"**",
        component:HelloComponent,
    }
];
