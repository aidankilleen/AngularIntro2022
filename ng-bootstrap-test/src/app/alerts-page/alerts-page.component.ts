import { Component, OnInit } from '@angular/core';
import { Alert } from './alert.interface';

@Component({
  selector: 'app-alerts-page',
  template: `
  <h2>Alerts</h2>
  <p *ngFor = "let alert of alerts">
    <ngb-alert 
      [type]="alert.type"
      (closed)="onClose(alert)">
      {{ alert.message }} 
    </ngb-alert>
  </p>
  `,
  styleUrls: ['./alerts-page.component.css']
})
export class AlertsPageComponent implements OnInit {

  onClose(alert: Alert) {
    window.alert("closed");
    let index = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);

  }

  alerts: Alert[] = [
    {
      type: 'success',
      message: 'This is an success alert',
    }, {
      type: 'info',
      message: 'This is an info alert',
    }, {
      type: 'warning',
      message: 'This is a warning alert',
    }, {
      type: 'danger',
      message: 'This is a danger alert',
    }, {
      type: 'primary',
      message: 'This is a primary alert',
    }, {
      type: 'secondary',
      message: 'This is a secondary alert',
    }, {
      type: 'light',
      message: 'This is a light alert',
    }, {
      type: 'dark',
      message: 'This is a dark alert',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
