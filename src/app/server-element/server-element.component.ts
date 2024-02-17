import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  @Input(`srvElement`)
  element: { type: string; name: string; content: string };
  @Input(`name`) name: string;

  constructor() {
    console.log(`constructor called`);
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(`ngOnChanges called`);
    console.log(change);
  }
  ngOnInit(): void {
    console.log(`ngOnInit called`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck called`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentCheck called`);
  }
}
