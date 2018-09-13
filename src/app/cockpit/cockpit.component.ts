import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverEvent = new EventEmitter<{type: string, name:string, content: string}>();
  @Output() blueprintEvent = new EventEmitter<{type: string, name:string, content: string}>();
  serverName = '';
  serverContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverEvent.emit({
      type: "server",
      name: this.serverName,
      content: this.serverContent
    });
  }

  onAddBlueprint() {
    this.blueprintEvent.emit({
      type: "blueprint",
      name: this.serverName,
      content: this.serverContent
    });
  }

}
