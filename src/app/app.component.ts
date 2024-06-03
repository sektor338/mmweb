import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AboutmeComponent} from "./pages/aboutme/aboutme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent, AboutmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mmweb';
}
