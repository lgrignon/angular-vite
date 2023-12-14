import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
