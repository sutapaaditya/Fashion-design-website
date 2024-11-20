import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'Fashion Design Fundamentals',
      description: 'Learn the basics of fashion design, from sketching to pattern making.',
      imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '12 weeks',
      category: 'Beginner',
      students: 120,
      price: '₹49,999'
    },
    {
      id: 2,
      title: 'Digital Fashion Design',
      description: 'Master digital tools and techniques for modern fashion design.',
      imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '8 weeks',
      category: 'Intermediate',
      students: 85,
      price: '₹39,999'
    },
    {
      id: 3,
      title: 'Sustainable Fashion',
      description: 'Explore sustainable practices in fashion design and production.',
      imageUrl: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '10 weeks',
      category: 'Advanced',
      students: 95,
      price: '₹54,999'
    },
    {
      id: 4,
      title: 'Pattern Making Advanced',
      description: 'Advanced techniques in pattern making and garment construction.',
      imageUrl: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '16 weeks',
      category: 'Advanced',
      students: 65,
      price: '₹69,999'
    },
    {
      id: 5,
      title: 'Fashion Portfolio Development',
      description: 'Build a professional fashion design portfolio.',
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '6 weeks',
      category: 'Professional',
      students: 110,
      price: '₹34,999'
    },
    {
      id: 6,
      title: 'Fashion Business Essentials',
      description: 'Learn the business side of fashion industry.',
      imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '8 weeks',
      category: 'Business',
      students: 130,
      price: '₹44,999'
    }
  ];
}
