import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display:'
  onButtonClick(event) {
    console.log(`Click event is working, event:`, event);
  }
  time = new Date();
  lastTimeZoneSelected = null;

  getDateByZone(timezone) {
    this.time = new Date();
    this.lastTimeZoneSelected = timezone;
    if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() + 1);
    } else if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    } else if(timezone === "Clear") {
      this.time = null;
      this.lastTimeZoneSelected = null;
    }
    console.log(timezone, "button was selected");
    this.lastTimeZoneSelected = timezone;
  }
}
