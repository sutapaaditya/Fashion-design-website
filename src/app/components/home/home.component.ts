import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: string;
  category: string;
  students: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: Course[] = [
    {
      id: 1,
      title: 'Fashion Design Fundamentals',
      description: 'Master the basics of fashion design with our comprehensive course.',
      imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '3 Months',
      price: '$499',
      category: 'Beginner',
      students: 250
    },
    {
      id: 2,
      title: 'Advanced Pattern Making',
      description: 'Learn professional pattern making techniques for haute couture.',
      imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '4 Months',
      price: '$699',
      category: 'Advanced',
      students: 180
    },
    {
      id: 3,
      title: 'Digital Fashion Design',
      description: 'Create stunning designs using modern digital tools and software.',
      imageUrl: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '3 Months',
      price: '$599',
      category: 'Intermediate',
      students: 200
    },
    {
      id: 4,
      title: 'Pattern Making Advanced',
      description: 'Advanced techniques in pattern making and garment construction.',
      imageUrl: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '4 Months',
      price: '$799',
      category: 'Advanced',
      students: 150
    },
    {
      id: 5,
      title: 'Fashion Portfolio Development',
      description: 'Build a professional fashion design portfolio.',
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '2 Months',
      price: '$399',
      category: 'Intermediate',
      students: 120
    },
    {
      id: 6,
      title: 'Fashion Business Essentials',
      description: 'Learn the business side of fashion industry.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '3 Months',
      price: '$549',
      category: 'Beginner',
      students: 180
    }
  ];

  email: string = '';

  constructor() { }

  ngOnInit(): void {
    this.animateStats();
  }

  subscribeNewsletter() {
    if (this.email && this.validateEmail(this.email)) {
      console.log('Subscribing email:', this.email);
      this.email = '';
    }
  }

  private validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  private animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalValue = parseInt(target.innerText);
          let currentValue = 0;
          const duration = 2000;
          const increment = Math.ceil(finalValue / (duration / 16));

          const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
              target.innerText = finalValue.toString() + '+';
              clearInterval(counter);
            } else {
              target.innerText = currentValue.toString() + '+';
            }
          }, 16);
        }
      });
    });

    stats.forEach(stat => observer.observe(stat));
  }
}
