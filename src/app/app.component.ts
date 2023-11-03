import { Component, ViewContainerRef } from '@angular/core';
import { NotificationService } from './notification/notification.service';
import { WarningComponent } from './warning/warning.component';
import { ImageContentComponent } from './image-content/image-content.component';
import { InputInteractionComponent } from './input-interaction/input-interaction.component';



interface comp {
  n: number;
  comp: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-notification';
  constructor(
    private notificationService: NotificationService,
    public viewRef: ViewContainerRef
  ) {
    this.notificationService.containerElementViewRef = this.viewRef;
  }

  selNum: number = 1;
  components: comp[] = [{n: 1, comp:'warning'}, {n: 2, comp: 'image-content'}, {n: 3, comp: 'input-interaction'}];


  onButtonClick() {

    //console.log(this.selNum);
    switch(this.selNum){
      case 1:
        this.notificationService.newNotification(WarningComponent);   
        break;
      case 2:
        this.notificationService.newNotification(ImageContentComponent);
        break;
      case 3:
        this.notificationService.newNotification(InputInteractionComponent);
        break;
      default:
        this.notificationService.newNotification(WarningComponent);
      break;
    }
  }
}
