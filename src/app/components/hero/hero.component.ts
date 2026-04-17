import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('bgVideo') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const vid = this.video.nativeElement;

    vid.muted = true;
    vid.play().catch(() => {
      console.log('Autoplay blocked, retrying...');
      setTimeout(() => vid.play(), 500);
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
