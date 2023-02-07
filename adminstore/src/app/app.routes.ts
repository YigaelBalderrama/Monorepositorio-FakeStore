import { Route } from '@angular/router';
import { HomeAnimationComponent } from './home-animation/home-animation.component';
import { NxWelcomeComponent } from './nx-welcome.component';


export const appRoutes: Route[] = [
    { path :'**', component:HomeAnimationComponent },
];
