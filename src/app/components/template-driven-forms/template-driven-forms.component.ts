import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';
import { SimpleDatabaseComponent } from '../simple-database/simple-database.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [TemplateFormComponent, SimpleDatabaseComponent, PersonTableComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
    currentPerson: EPerson | undefined;
    // persons: EPerson[] = [];

    onPerson(person: EPerson){
        console.log("From Parent>>>",person);
        this.currentPerson = person;
        // this.persons.push(person);
        ManyPerson.push(person)
        console.log("CurrentPerson>>",this.currentPerson);
        // console.log("Persons>>>", this.persons);
    }
}