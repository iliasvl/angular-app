import { Component, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    FormsModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements AfterViewInit{
    @Output() person = new EventEmitter<EPerson> 
    @ViewChild('userForm', {static:false}) form: NgForm | undefined;


    ngAfterViewInit(): void {
      setTimeout(()=>{
        if (this.form) {
          this.form.setValue({
            givenName: "John",
            surName:"Doe",
            age: 30,
            email: "john@aueb..gr",
            address: "road2"
          })
        }
      },0)
    }

    onSubmit(value: any){
        console.log(value)
        console.log(this.form)
        console.log(this.form?.value)
        this.person.emit(value as EPerson);
    }

    onSetValue(){
      this.form?.setValue({
        givenName: "lakis",
        surName: "lalakis",
        age: 50,
        email: "lakis@aueb.gr",
        assress:"road1"
      })
    }
}