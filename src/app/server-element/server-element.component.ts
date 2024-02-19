import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input(`srvElement`)
  element: { type: string; name: string; content: string };
  @Input(`name`) name: string;
  @ViewChild(`heading`, { static: true }) header: ElementRef;
  @ContentChild(`contentParagraph`) paragraph: ElementRef;

  constructor() {
    console.log(`constructor called`);
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log(`ngOnChanges called`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit called`);
    console.log(this.header.nativeElement.textContent);
    console.log(
      `Text content of paragraph :` + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck called`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentCheck called`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewIinit called`);
    console.log(`Header element :` + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy called`);
  }
}
