import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.comonent.scss']
})


export class UserComponent {
  @Input() user;

  isMarked = false;

  onClick(): void {
    this.isMarked = true;
      console.log('+++++++++++++++++++++++++');
  }
}



