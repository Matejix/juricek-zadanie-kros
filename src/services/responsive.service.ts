import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile = breakpointObserver.isMatched('(max-width: 767px)');

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
