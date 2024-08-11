import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseComponent,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-student-management';
  selectedCourse: string = 'Course 1';
}
