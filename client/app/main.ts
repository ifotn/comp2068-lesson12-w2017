/**
 * Created by RFreeman on 3/29/2017.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
/*import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}*/

platformBrowserDynamic().bootstrapModule(AppModule);
