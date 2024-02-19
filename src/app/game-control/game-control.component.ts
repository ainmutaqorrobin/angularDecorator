import {
  Component,
  ChangeDetectorRef,
  Input,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  flag: boolean = false;
  btnName: string = 'Start';
  count: number = 0;
  timer: any;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() {}
  ngOnInit(): void {}

  onClickButton() {
    this.flag = !this.flag;
    if (this.flag) {
      this.startInterval();
      this.btnName = 'Stop';
    } else {
      this.endInterval();
      this.btnName = `Start`;
      this.count = 0;
    }
  }

  startInterval() {
    this.timer = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
      console.log(`test ` + this.count);
      console.log(`IntervalFired value is ` + this.intervalFired);
    }, 1000);
  }

  endInterval() {
    clearInterval(this.timer);
  }
}
