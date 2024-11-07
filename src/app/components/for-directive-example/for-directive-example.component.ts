import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
    users:Person[] = [
        {
      "givenName": "Isaac",
      "surName": "Martinez",
      "email": "isaac.a.martinez@outlook.com",
      "age": 43,
      "address": "Fedscreek"
    },
    {
      "givenName": "Sara",
      "surName": "Ward",
      "email": "saraward@gmail.com",
      "age": 50,
      "address": "Amf Ohare"
    },
    {
      "givenName": "Melissa",
      "surName": "Wright",
      "email": "melissawright@ymail.com",
      "age": 43,
      "address": "McClelland"
    },
    {
      "givenName": "Victoria",
      "surName": "Baker",
      "email": "vfbaker@ymail.com",
      "age": 35,
      "address": "Fort Worth"
    },
    {
      "givenName": "Owen",
      "surName": "Hill",
      "email": "o.w.hill@outlook.com",
      "age": 65,
      "address": "Advent"
    },
    {
      "givenName": "Michelle",
      "surName": "Young",
      "email": "michellefyoung@outlook.com",
      "age": 33,
      "address": "Greenfield"
    },
    {
      "givenName": "Joshua",
      "surName": "Washington",
      "email": "joshua.washington@live.com",
      "age": 49,
      "address": "Altavista"
    },
    {
      "givenName": "Isabella",
      "surName": "Sanders",
      "email": "isanders@gmail.com",
      "age": 39,
      "address": "Charlotte"
    },
    {
      "givenName": "Jason",
      "surName": "Adams",
      "email": "j.e.adams74@live.com",
      "age": 52,
      "address": "Bean Station"
    },
    {
      "givenName": "Alyssa",
      "surName": "Adams",
      "email": "alyssa_adams@outlook.com",
      "age": 65,
      "address": "Rodanthe"
    }
  ]
}
