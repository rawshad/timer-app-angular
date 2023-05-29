import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() duration!: number;
  remainingTime!: number;
  private intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if('duration' in changes) {
      this.startTimer();
    }
    
  }

  ngOnDestroy() {
    this.stopTimer();    
  }

  private startTimer() {
    this.stopTimer();
    this.remainingTime = this.duration;
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      if(this.remainingTime == 0) {
        this.stopTimer();
      }
    }, 1000)
  }

  private stopTimer() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}