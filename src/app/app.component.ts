import { Component } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [{ type: `server`, name: `Test`, content: `content test` }];
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
  onButtonClicked() {
    this.serverElements[0].name = `Changed!`;
  }
  onDestroyClicked() {
    this.serverElements.pop();
  }
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else this.oddNumbers.push(firedNumber);
  }
}
