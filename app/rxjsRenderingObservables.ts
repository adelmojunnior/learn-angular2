import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

@Component({
    selector: 'teste-app',
    template: '<h1> {{ clock }}</h1>'
})

export /**
 * RXJSRenderingObservables
 */
class RXJSRenderingObservables {
    
    clock = Observable.interval(1000);

    constructor() {  
        this.clock.subscribe(
            console.log.bind(console)
        );
    }
}
