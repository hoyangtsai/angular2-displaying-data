/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

class FriendsService {
  list: Array<string>;
  constructor() {
    this.list = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

@Component({
  selector: 'display',
  appInjector: [FriendsService]
})

@View({
  template: `
    <p>My name: {{ myName }}</p>
    <p> Friends:</p>
    <ul>
      <li *ng-for="#name of names" > {{ name }} </li>
    </ul>
    <p *ng-if="names.length > 3">You have many friends!</p>
  `,
  directives: [NgFor, NgIf]
})

class DisplayComponent {
  myName: string;
  names: Array<string>;

  constructor(friendsService: FriendsService) {
    this.myName = 'Ho-Yang';
    this.names = friendsService.list;
  }
}

bootstrap(DisplayComponent);