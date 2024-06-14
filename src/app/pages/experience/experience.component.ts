import { Component } from '@angular/core';
import {TimelineComponent} from "../../home/timeline/timeline.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-experience',
  standalone: true,
    imports: [
        TimelineComponent,
        RouterLink
    ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
