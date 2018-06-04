import { Injectable } from '@angular/core';
import { Observable ,  fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DnaWebSockService {

private websocket = null;

  constructor() {
    // this.websocket = new WebSocket("ws://echo.websocket.org/");
  }

  public GetInstanceStatus(): Observable<Event> {
    return fromEvent(this.websocket, 'message');
}

  public sendMessage(text: string) {
    const msg = {msg: text};
    this.websocket.next(JSON.stringify(msg));
  }

}
