
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { PrincipalComponent } from './principal.component';

bootstrap(PrincipalComponent, [
    disableDeprecatedForms(),
    provideForms()
]).catch((err: any) => console.error(err));

//import { RXJSRenderingObservables } from './rxjsRenderingObservables';
//bootstrap(RXJSRenderingObservables);
