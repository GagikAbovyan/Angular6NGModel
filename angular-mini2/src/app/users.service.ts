import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private http: Http) {}

  /*users = [
    {name: 'WFM1'},
    {name: 'WFM2'},
    {name: 'WFM3'},
    {name: 'WFM4'},
    {name: 'WFM5'}
  ];*/

  getUsers() {
    return this.http.
    get('https://randomuser.me/api/?inc=ge' +
      'nder,name,picture,location&results=8&nat=gb%E' +
      'F%BB%BF')
     .pipe(map(response => response.json()))
     .pipe(map(response => response.results))
     .pipe(map(users => {
       return users.map(u => {
         return {
           name: u.name.first + ' ' + u.name.last,
           image: u.picture.large,
           geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
         };
       });
     }));
  }
}
