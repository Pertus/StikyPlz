import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerErrorService {

  public error;

  constructor(private router: Router) {
    // Reset error when route changes
    router.events.subscribe((val) => {
      this.clearError();
    });
  }

  setError(key: string) {
    this.error = 'An error has occurred';
    console.log('error in service is now: ' + this.error);
  }

  clearError() {
    this.error = '';
  }

}
