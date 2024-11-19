import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: string;
  highlights: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Fashion Design Fundamentals',
      description: 'Master the basics of fashion design including sketching, pattern making, and fabric selection.',
      imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      duration: '3 months',
      price: '₹49,999',
      highlights: ['Basic sketching techniques', 'Pattern making fundamentals', 'Fabric selection', 'Color theory']
    },
    {
      id: 2,
      title: 'Advanced Pattern Making',
      description: 'Take your pattern making skills to the next level with advanced techniques and digital tools.',
      imageUrl: 'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      duration: '4 months',
      price: '₹64,999',
      highlights: ['Digital pattern making', 'Advanced draping', '3D modeling', 'Technical specifications']
    },
    {
      id: 3,
      title: 'Sustainable Fashion Design',
      description: 'Learn to create eco-friendly and sustainable fashion designs using modern techniques.',
      imageUrl: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      duration: '3 months',
      price: '₹54,999',
      highlights: ['Sustainable materials', 'Eco-friendly practices', 'Upcycling techniques', 'Ethical fashion']
    },
    {
      id: 4,
      title: 'Digital Fashion Design',
      description: 'Master digital tools and software used in modern fashion design and illustration.',
      imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      duration: '4 months',
      price: '₹69,999',
      highlights: ['Digital illustration', 'CAD software', '3D visualization', 'Digital portfolio creation']
    },
    {
      id: 5,
      title: 'Couture Techniques',
      description: 'Learn high-end fashion design techniques used in luxury and couture fashion houses.',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      duration: '6 months',
      price: '₹94,999',
      highlights: ['Hand sewing techniques', 'Luxury fabrics', 'Beading and embellishment', 'Haute couture methods']
    },
    {
      id: 6,
      title: 'Fashion Business & Marketing',
      description: 'Understand the business side of fashion, from branding to marketing and retail.',
      imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      duration: '3 months',
      price: '₹49,999',
      highlights: ['Brand development', 'Marketing strategies', 'Retail management', 'Fashion merchandising']
    }
  ];

  constructor() { }

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
