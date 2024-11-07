import { Component, EventEmitter, Output } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-database',
  standalone: true,
  imports: [],
  templateUrl: './simple-database.component.html',
  styleUrl: './simple-database.component.css'
})
export class SimpleDatabaseComponent {
    @Output() personClicked = new EventEmitter<EPerson>();
    manyPerson = ManyPerson;

    sortOrder: EPerson = {
        givenName: 'none',
        surName: 'none',
        age: 'none',
        email:'none',
        address:'none',
    }

    sortData(sortKey: keyof EPerson ): void {
        if (this.sortOrder[sortKey]==='asc') {
            this.sortOrder[sortKey]='desc'
            this.manyPerson = sortBy(this.manyPerson,sortKey).reverse()
        } else {        // if (this.sortOrder[sortKey]==='asc')
            this.sortOrder[sortKey]='asc';
            this.manyPerson = sortBy(this.manyPerson,sortKey)
        }
    }

    // sortSign(sortKey: keyof EPerson) {
    //     if (this.sortOrder[sortKey] === 'asc')
    //         return '↑'
    //     else if (this.sortOrder[sortKey]==='desc')
    //         return '↓'
    //     else return ''
    // }

    sortSign(sortKey: keyof EPerson): string {
        if (this.sortOrder[sortKey] ==='asc')
            return '&uarr;'
        else if (this.sortOrder[sortKey] === 'desc')
            return '&darr;'
        else return ''
    }

    onPersonClick(person: EPerson){
        console.log(person);
        this.personClicked.emit(person)
    }
}