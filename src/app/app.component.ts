import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    // Ascultăm evenimentele de la App
    App.addListener('appUrlOpen', (data: any) => {
      const url = new URL(data.url);
      const path = url.pathname;

      if (path === '/create-calculator') {
        const jsonData = url.searchParams.get('data');
        if (jsonData) {
          const calculator = JSON.parse(decodeURIComponent(jsonData));
          this.router.navigate(['/calculatoare'], { state: { calculator } });
        }
      }
    });
  }
}
