import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone:true,
  imports:[FormsModule,NgIf],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() selectedCourse: string = '';
  students: { [key: string]: string[] } = {};
  selectedStudent: string = '';
  addingStudent: boolean = false;
  newStudent: string = '';

  showAddStudent() {
    this.addingStudent = true;
  }

  addStudent() {
    if (this.newStudent) {
      if (!this.students[this.selectedCourse]) {
        this.students[this.selectedCourse] = [];
      }
      this.students[this.selectedCourse].push(this.newStudent);
      this.newStudent = '';
      this.addingStudent = false;
    }
  }

  cancelAddStudent() {
    this.newStudent = '';
    this.addingStudent = false;
  }
}