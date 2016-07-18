import { Component } from '@angular/core';

@Component({
    selector: 'filho-dois',
    template: `<pre>
        Param1: {{param1}}<br />
        Param2: {{param2}}
    </pre>`,
    inputs: ['param1', 'param2'],
    host: {
        class: 'row',
        "[style.color]":"obterCor()"
    }
})

export /**
 * FilhoDoisComponent
 */
class FilhoDoisComponent {
    param1: string = "---Valor padrão---"
    param2: number;

    obterCor(): String {
        return 'red'
    }
}