import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverEvent = new EventEmitter<{type: string, name:string, content: string}>();
  @Output() blueprintEvent = new EventEmitter<{type: string, name:string, content: string}>();

  //Local reference gives the whole element 
  @ViewChild('serverNameInput') serverName: ElementRef;
  @ViewChild('serverContentInput') serverContent: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverEvent.emit({
      type: "server",
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.blueprintEvent.emit({
      type: "blueprint",
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    });
  }

}
