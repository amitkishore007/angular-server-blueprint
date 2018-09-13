import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
 
  onServerCreated(EventData: {type:string, name:string, content:string}) {
    this.serverElements.push({
      type: "server",
      name: EventData.name,
      content: EventData.content
    });
  }

  onBlueprintCreated(EventData: {type: string, name: string, content: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: EventData.name,
      content: EventData.content
    });
  }

}
