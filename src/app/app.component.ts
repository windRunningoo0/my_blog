import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageBoardComponent } from './components/message-board/message-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-blog';
  constructor (public dialog: MatDialog) {
    // alert(dialog)
    /* setTimeout(() => {
      dialog.open(MessageBoardComponent, {height: '200px', width: '350px'})
    }, 1000) */
  }
}
