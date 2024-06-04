import { Routes } from '@angular/router';
import {AboutmeComponent} from "./pages/aboutme/aboutme.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {ExperienceComponent} from "./pages/experience/experience.component";


export const routes: Routes = [
    {path:"aboutme", component:AboutmeComponent},
    {path:"services", component:ServicesComponent},
    {path:"projects", component:ProjectsComponent},
    {path:"contact", component:ContactComponent},
    {path:"experience", component:ExperienceComponent},
    {path:"", component:HomeComponent},
];
