import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CatalogPageProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  showAllCategories: boolean;
  setShowAllCategories: (show: boolean) => void;
  categories: Array<{ emoji: string; name: string; count: number }>;
  countries: Array<{ name: string; count: number }>;
  suppliers: Array<{
    id: number;
    name: string;
    logo: string;
    rating: number;
    reviews: number;
    city: string;
    country: string;
    verified: string;
    categories: string[];
    minOrder: string;
    delivery: string;
  }>;
}

const CatalogPage = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showAllCategories,
  setShowAllCategories,
  categories,
  countries,
  suppliers,
}: CatalogPageProps) => {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[#8A898C] mb-4">
          <span>Главная</span>
          <Icon name="ChevronRight" size={16} />
          <span>Каталог</span>
          <Icon name="ChevronRight" size={16} />
          <span className="text-[#222222]">Поставщики</span>
        </div>
        
        <h2 className="text-4xl font-bold text-[#222222] mb-2">Каталог поставщиков</h2>
        <p className="text-[#8A898C] text-lg mb-6">Найдено 15 245 проверенных компаний</p>
        
        <div className="flex gap-3 max-w-2xl">
          <Input 
            placeholder="Поиск по названию, категории или стране..." 
            className="flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="bg-[#1EAEDB] hover:bg-[#0FA0CE] px-8">
            <Icon name="Search" size={20} className="mr-2" />
            Поиск
          </Button>
        </div>
      </div>

      {!selectedCategory ? (
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[#222222] mb-6">Выберите категорию:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {categories.slice(0, showAllCategories ? categories.length : 6).map((category) => (
              <Card 
                key={category.name}
                className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-[#1EAEDB] group"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{category.emoji}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-[#222222] group-hover:text-[#1EAEDB] transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-[#8A898C] text-sm">{category.count} поставщиков</p>
                  </div>
                  <Icon name="ChevronRight" size={24} className="text-[#8A898C] group-hover:text-[#1EAEDB] transition-colors" />
                </div>
              </Card>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? 'Скрыть' : 'Показать все 21 категорию'}
            <Icon name={showAllCategories ? "ChevronUp" : "ChevronDown"} size={20} className="ml-2" />
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm mb-4 p-3 bg-[#F6F6F7] rounded-lg">
                  <span className="text-2xl">
                    {categories.find(c => c.name === selectedCategory)?.emoji}
                  </span>
                  <span className="font-medium text-[#222222]">{selectedCategory}</span>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="ml-auto text-[#8A898C] hover:text-[#222222]"
                  >
                    <Icon name="X" size={16} />
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[#222222] mb-4">Уточните параметры:</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#222222] mb-3">Страна поставки:</h4>
                  <div className="space-y-2">
                    {countries.map((country) => (
                      <div key={country.name} className="flex items-center space-x-2">
                        <Checkbox id={country.name} />
                        <label
                          htmlFor={country.name}
                          className="text-sm flex-1 cursor-pointer"
                        >
                          {country.name} ({country.count})
                        </label>
                      </div>
                    ))}
                    <Button variant="link" className="p-0 h-auto text-[#1EAEDB]">
                      Все страны
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#222222] mb-3">Уровень проверки:</h4>
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">Все поставщики</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="verified" id="verified" />
                      <Label htmlFor="verified">Только проверенные</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="premium" id="premium" />
                      <Label htmlFor="premium">Премиум</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="video" id="video" />
                      <Label htmlFor="video">С видео</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="font-semibold text-[#222222] mb-3">Минимальный заказ:</h4>
                  <RadioGroup defaultValue="any">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any" />
                      <Label htmlFor="any">Любой</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50k" id="50k" />
                      <Label htmlFor="50k">До 50K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50-100k" id="50-100k" />
                      <Label htmlFor="50-100k">50-100K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="100-500k" id="100-500k" />
                      <Label htmlFor="100-500k">100-500K</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="500k+" id="500k+" />
                      <Label htmlFor="500k+">От 500K</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="font-semibold text-[#222222] mb-3">Дополнительные опции:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="oem" />
                      <label htmlFor="oem" className="text-sm cursor-pointer">
                        OEM/ODM
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="samples" />
                      <label htmlFor="samples" className="text-sm cursor-pointer">
                        Образцы доступны
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="express" />
                      <label htmlFor="express" className="text-sm cursor-pointer">
                        Срочная доставка
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="warehouse" />
                      <label htmlFor="warehouse" className="text-sm cursor-pointer">
                        Склад в РФ
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <Button className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]">
                    Применить фильтры
                  </Button>
                  <Button variant="outline" className="w-full">
                    Сбросить
                  </Button>
                </div>
              </div>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[#222222] font-medium">
                Найдено: <span className="text-[#1EAEDB]">{suppliers.length}</span> поставщиков в категории "{selectedCategory}"
              </p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="reviews">По отзывам</SelectItem>
                  <SelectItem value="price">По цене</SelectItem>
                  <SelectItem value="delivery">По доставке</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {suppliers.map((supplier) => (
                <Card key={supplier.id} className="p-6 hover:shadow-xl transition-all">
                  <div className="flex flex-col h-full">
                    <div className="w-20 h-20 bg-[#F6F6F7] rounded-lg flex items-center justify-center text-4xl mb-4 mx-auto">
                      {supplier.logo}
                    </div>
                    
                    <h3 className="font-bold text-lg text-[#222222] mb-2 text-center">
                      {supplier.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i}
                            name="Star" 
                            size={16} 
                            className={i < Math.floor(supplier.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#8A898C]">
                        {supplier.rating} ({supplier.reviews})
                      </span>
                    </div>

                    <div className="space-y-2 mb-4 flex-1">
                      <div className="flex items-center gap-2 text-sm text-[#8A898C]">
                        <Icon name="MapPin" size={16} />
                        <span>{supplier.city}, {supplier.country}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="ShieldCheck" size={16} className="text-green-500" />
                        <Badge variant="secondary" className="text-xs">
                          {supplier.verified}
                        </Badge>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs font-semibold text-[#222222] mb-2">Специализация:</p>
                        <div className="flex flex-wrap gap-1">
                          {supplier.categories.map((cat) => (
                            <Badge key={cat} variant="outline" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                        <div className="flex items-center gap-1 text-[#8A898C]">
                          <span>💰</span>
                          <span>От {supplier.minOrder}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#8A898C]">
                          <span>🚚</span>
                          <span>{supplier.delivery}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                      <Button variant="outline" size="sm" className="text-xs">
                        Подробнее
                      </Button>
                      <Button size="sm" className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-xs">
                        Написать
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Star" size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">
                <Icon name="ChevronLeft" size={16} className="mr-1" />
                Назад
              </Button>
              <Button variant="outline" size="sm" className="bg-[#1EAEDB] text-white hover:bg-[#0FA0CE]">
                1
              </Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">...</Button>
              <Button variant="outline" size="sm">254</Button>
              <Button variant="outline" size="sm">
                Вперёд
                <Icon name="ChevronRight" size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
