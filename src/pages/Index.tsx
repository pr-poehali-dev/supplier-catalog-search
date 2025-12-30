import { useState } from 'react';
import Navigation from '@/components/Navigation';
import CatalogPage from '@/components/CatalogPage';
import OtherPages from '@/components/OtherPages';

const categories = [
  { emoji: '🛋️', name: 'Мебель и интерьер', count: 2543 },
  { emoji: '🏗️', name: 'Строительство и ремонт', count: 3421 },
  { emoji: '👗', name: 'Текстиль и одежда', count: 4123 },
  { emoji: '🍎', name: 'Продукты питания', count: 1876 },
  { emoji: '💻', name: 'Электроника и техника', count: 1954 },
  { emoji: '🚗', name: 'Автотовары', count: 1328 },
];

const countries = [
  { name: 'Китай', count: 8432 },
  { name: 'Россия', count: 3214 },
  { name: 'Турция', count: 1543 },
  { name: 'Беларусь', count: 892 },
  { name: 'Казахстан', count: 564 },
];

const suppliers = [
  {
    id: 1,
    name: 'TechSupply Global',
    logo: '💻',
    rating: 4.8,
    reviews: 234,
    city: 'Шэньчжэнь',
    country: 'Китай',
    verified: 'Премиум',
    categories: ['Электроника', 'Гаджеты'],
    minOrder: '50K',
    delivery: '10-15 дней'
  },
  {
    id: 2,
    name: 'Furniture Masters Co',
    logo: '🛋️',
    rating: 4.9,
    reviews: 567,
    city: 'Стамбул',
    country: 'Турция',
    verified: 'Проверен',
    categories: ['Мебель', 'Интерьер'],
    minOrder: '100K',
    delivery: '20-25 дней'
  },
  {
    id: 3,
    name: 'Fashion Textile Ltd',
    logo: '👗',
    rating: 4.7,
    reviews: 189,
    city: 'Гуанчжоу',
    country: 'Китай',
    verified: 'Премиум',
    categories: ['Текстиль', 'Одежда'],
    minOrder: '30K',
    delivery: '15-20 дней'
  },
  {
    id: 4,
    name: 'BuildPro Materials',
    logo: '🏗️',
    rating: 4.6,
    reviews: 423,
    city: 'Москва',
    country: 'Россия',
    verified: 'Проверен',
    categories: ['Стройматериалы', 'Инструменты'],
    minOrder: '200K',
    delivery: '5-7 дней'
  },
  {
    id: 5,
    name: 'Auto Parts Express',
    logo: '🚗',
    rating: 4.5,
    reviews: 312,
    city: 'Шанхай',
    country: 'Китай',
    verified: 'Проверен',
    categories: ['Автозапчасти', 'Аксессуары'],
    minOrder: '75K',
    delivery: '12-18 дней'
  },
  {
    id: 6,
    name: 'Organic Food Group',
    logo: '🍎',
    rating: 4.9,
    reviews: 645,
    city: 'Минск',
    country: 'Беларусь',
    verified: 'Премиум',
    categories: ['Продукты', 'Органика'],
    minOrder: '40K',
    delivery: '3-5 дней'
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<'catalog' | 'favorites' | 'compare' | 'profile' | 'support'>('catalog');

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="container mx-auto px-6 py-8">
        {currentPage === 'catalog' && (
          <CatalogPage
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showAllCategories={showAllCategories}
            setShowAllCategories={setShowAllCategories}
            categories={categories}
            countries={countries}
            suppliers={suppliers}
          />
        )}

        <OtherPages
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Index;
