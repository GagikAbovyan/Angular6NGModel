import {Component, NgModule, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';



/*@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {

  users = [];
  searchStr = '';

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    // this.users = this.usersService.users;
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
