import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FashionItem {
  id: number;
  name: string;
  designer: string;
  category: string;
  imageUrl: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-fashion-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fashion-gallery.component.html',
  styleUrls: ['./fashion-gallery.component.scss']
})
export class FashionGalleryComponent {
  defaultImage = 'assets/images/evening-gown-1.jpg';

  fashionItems: FashionItem[] = [
    {
      id: 1,
      name: 'Elegant Evening Gown',
      designer: 'Elegant Fashion Academy',
      category: 'Evening Wear',
      imageUrl: 'assets/images/evening-gown-1.jpg',
      description: 'A stunning floor-length evening gown with intricate beadwork and flowing silhouette.',
      price: '₹25,999'
    },
    {
      id: 2,
      name: 'Contemporary Fusion Dress',
      designer: 'Elegant Fashion Academy',
      category: 'Indo-Western',
      imageUrl: 'assets/images/fushion-dress-1.jpg', 
      description: 'Modern take on traditional Indian wear with contemporary styling.',
      price: '₹18,499'
    },
    {
      id: 3,
      name: 'Summer Collection Dress',
      designer: 'Elegant Fashion Academy',
      category: 'Casual Wear',
      imageUrl: 'assets/images/summer-dress-1.jpg',
      description: 'Light and breezy summer dress with floral patterns.',
      price: '₹12,999'
    },
    {
      id: 4,
      name: 'Bridal Lehenga',
      designer: 'Elegant Fashion Academy',
      category: 'Bridal Wear',
      imageUrl: 'assets/images/bridal-1.jpg',
      description: 'Exquisite bridal lehenga with heavy embroidery and modern design.',
      price: '₹85,999'
    },
    {
      id: 5,
      name: 'Party Wear Gown',
      designer: 'Elegant Fashion Academy',
      category: 'Party Wear',
      imageUrl: 'assets/images/party-gown.jpg', 
      description: 'Stylish party wear gown with contemporary design elements.',
      price: '₹22,999'
    },
    {
      id: 6,
      name: 'Designer Saree',
      designer: 'Elegant Fashion Academy',
      category: 'Traditional',
      imageUrl: 'assets/images/saree-1.jpg',
      description: 'Modern designer saree with elegant embroidery and contemporary blouse.',
      price: '₹32,999'
    }
  ];

  selectedCategory: string = 'all';

  get filteredItems(): FashionItem[] {
    if (this.selectedCategory === 'all') {
      return this.fashionItems;
    }
    return this.fashionItems.filter(item => item.category === this.selectedCategory);
  }

  get categories(): string[] {
    const categories = new Set(this.fashionItems.map(item => item.category));
    return Array.from(categories);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  handleImageError(event: any) {
    event.target.src = this.defaultImage;
  }
}
