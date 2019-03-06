import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div>This has been evaulatated {{ timesEvaluated }} times</div>'
})
export class MyComponentComponent {
    private _timesEvaluated = 0;

    get timesEvaluated() {
        this._timesEvaluated++;
        return this._timesEvaluated;
    }
}
