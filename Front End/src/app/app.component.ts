import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SharjeelM';

  constructor(private router: Router) {}
  navigatePages(pName: string) {
    this.router.navigate([pName]);
  }
}
