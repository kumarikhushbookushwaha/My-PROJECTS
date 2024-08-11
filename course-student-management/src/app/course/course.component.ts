import { NgForOf, NgIf } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [FormsModule,NgIf,NgForOf],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  schemas:[NO_ERRORS_SCHEMA]
})
export class CourseComponent {
  courses: string[] = [];
  selectedCourse: string = '';
  addingCourse: boolean = false;
  newCourse: string = '';

  showAddCourse() {
    this.addingCourse = true;
  }

  addCourse() {
    if (this.newCourse) {
      this.courses.push(this.newCourse);
      this.newCourse = '';
      this.addingCourse = false;
    }
  }

  cancelAddCourse() {
    this.newCourse = '';
    this.addingCourse = false;
  }
}
