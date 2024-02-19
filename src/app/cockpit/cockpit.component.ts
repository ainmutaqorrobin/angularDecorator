import { HtmlParser } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent implements OnInit {
  @Output(`svr`) serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output(`bp`) blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @ViewChild(`contentParagraph`, { static: true }) serverContentInput;

  newServerName: string = '';
  newServerContent: string = '';

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent,
    console.log(this.serverContentInput);
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    //   this.blueprintCreated.emit({
    //     serverName: serverNameInput.value,
    //     serverContent: this.newServerContent,
    //   });
    // }
  }
}
