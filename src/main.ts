import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// Adaugă listener pentru linkurile deschise
App.addListener('appUrlOpen', (data: any) => {
  if (data.url) {
    const url = new URL(data.url);

    // Verifică dacă URL-ul conține calea "/create-calculator"
    if (url.pathname === '/create-calculator') {
      const params = url.searchParams;
      const calculatorData = params.get('data');

      if (calculatorData) {
        try {
          // Decodează și parsează datele calculatorului
          const parsedData = JSON.parse(decodeURIComponent(calculatorData));
          console.log('Received Calculator Data:', parsedData);

          // Navighează la componenta calculatorului (Angular Router)
          const router = (platformBrowserDynamic() as any)._injector.get(Router);
          router.navigate(['/calculatoare'], {
            state: { customCalculator: parsedData },
          });
        } catch (error) {
          console.error('Error parsing calculator data:', error);
        }
      }
    }
  }
});