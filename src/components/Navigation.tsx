import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  currentPage: 'catalog' | 'favorites' | 'compare' | 'profile' | 'support';
  setCurrentPage: (page: 'catalog' | 'favorites' | 'compare' | 'profile' | 'support') => void;
  setSelectedCategory: (category: string | null) => void;
}

const Navigation = ({ currentPage, setCurrentPage, setSelectedCategory }: NavigationProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-[#222222]">SupplierHub</h1>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => { setCurrentPage('catalog'); setSelectedCategory(null); }}
                className="text-[#222222] hover:text-[#1EAEDB] transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => setCurrentPage('catalog')}
                className={`transition-colors font-medium ${currentPage === 'catalog' ? 'text-[#1EAEDB]' : 'text-[#222222] hover:text-[#1EAEDB]'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setCurrentPage('favorites')}
                className={`transition-colors ${currentPage === 'favorites' ? 'text-[#1EAEDB]' : 'text-[#8A898C] hover:text-[#1EAEDB]'}`}
              >
                Избранное
              </button>
              <button 
                onClick={() => setCurrentPage('compare')}
                className={`transition-colors ${currentPage === 'compare' ? 'text-[#1EAEDB]' : 'text-[#8A898C] hover:text-[#1EAEDB]'}`}
              >
                Сравнение
              </button>
              <button 
                onClick={() => setCurrentPage('profile')}
                className={`transition-colors ${currentPage === 'profile' ? 'text-[#1EAEDB]' : 'text-[#8A898C] hover:text-[#1EAEDB]'}`}
              >
                Профиль
              </button>
              <button 
                onClick={() => setCurrentPage('support')}
                className={`transition-colors ${currentPage === 'support' ? 'text-[#1EAEDB]' : 'text-[#8A898C] hover:text-[#1EAEDB]'}`}
              >
                Поддержка
              </button>
            </div>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
