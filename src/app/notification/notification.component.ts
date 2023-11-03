import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  public childComponentType!: Type<any>;
  public onClose$: Subject<boolean> = new Subject();

  @ViewChild('notificationTemplate', { read: ViewContainerRef, static: true })
  public notificationTemplate!: ViewContainerRef;

  public ngAfterContentInit(): void {
    this.notificationTemplate.createComponent(this.childComponentType);
  }

  onClose() {
    this.onClose$.next(true);
  }

}
