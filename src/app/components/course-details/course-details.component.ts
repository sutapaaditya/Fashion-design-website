import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = parseInt(params['id'], 10);
      this.course = this.courseService.getCourseById(courseId);
    });
  }
}
