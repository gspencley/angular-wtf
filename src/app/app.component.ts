import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // What will the value of _count be on initial page load?
    private _count = 0;
    timesClicked = 0;

    // How will calling this method affect _count?
    clickButton() {
        this.timesClicked++;
    }

    get count() {
        this._count++;
        return this._count;
    }
}
