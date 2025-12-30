import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OtherPagesProps {
  currentPage: 'catalog' | 'favorites' | 'compare' | 'profile' | 'support';
  setCurrentPage: (page: 'catalog' | 'favorites' | 'compare' | 'profile' | 'support') => void;
}

const OtherPages = ({ currentPage, setCurrentPage }: OtherPagesProps) => {
  return (
    <>
      {currentPage === 'favorites' && (
        <div className="text-center py-20">
          <Icon name="Star" size={64} className="mx-auto mb-4 text-[#1EAEDB]" />
          <h2 className="text-3xl font-bold text-[#222222] mb-4">Избранные поставщики</h2>
          <p className="text-[#8A898C] mb-8">Здесь будут сохраненные поставщики</p>
          <Button onClick={() => setCurrentPage('catalog')} className="bg-[#1EAEDB] hover:bg-[#0FA0CE]">
            Перейти в каталог
          </Button>
        </div>
      )}

      {currentPage === 'compare' && (
        <div className="text-center py-20">
          <Icon name="GitCompare" size={64} className="mx-auto mb-4 text-[#1EAEDB]" />
          <h2 className="text-3xl font-bold text-[#222222] mb-4">Сравнение поставщиков</h2>
          <p className="text-[#8A898C] mb-8">Добавьте поставщиков для сравнения</p>
          <Button onClick={() => setCurrentPage('catalog')} className="bg-[#1EAEDB] hover:bg-[#0FA0CE]">
            Выбрать поставщиков
          </Button>
        </div>
      )}

      {currentPage === 'profile' && (
        <div className="text-center py-20">
          <Icon name="User" size={64} className="mx-auto mb-4 text-[#1EAEDB]" />
          <h2 className="text-3xl font-bold text-[#222222] mb-4">Профиль пользователя</h2>
          <p className="text-[#8A898C] mb-8">Войдите для доступа к личному кабинету</p>
          <Button className="bg-[#1EAEDB] hover:bg-[#0FA0CE]">
            Войти
          </Button>
        </div>
      )}

      {currentPage === 'support' && (
        <div>
          <h2 className="text-4xl font-bold text-[#222222] mb-2">Поддержка и помощь</h2>
          <p className="text-[#8A898C] text-lg mb-8">Мы всегда готовы помочь</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-xl text-[#222222] mb-2">Онлайн-чат</h3>
              <p className="text-[#8A898C] text-sm mb-2">Ответ за 5 минут</p>
              <p className="text-[#8A898C] text-sm mb-4">Доступно: 24/7</p>
              <Button className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]">
                Начать чат
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-xl text-[#222222] mb-2">Телефон</h3>
              <p className="text-[#8A898C] text-sm mb-2">8-800-123-45-67</p>
              <p className="text-[#8A898C] text-sm mb-4">Пн-Пт: 9:00-18:00</p>
              <Button className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]">
                Позвонить
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-bold text-xl text-[#222222] mb-2">Email</h3>
              <p className="text-[#8A898C] text-sm mb-2">support@supplierhub.ru</p>
              <p className="text-[#8A898C] text-sm mb-4">Ответ в течение 24 часов</p>
              <Button className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]">
                Написать
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-xl text-[#222222] mb-2">Telegram-бот</h3>
              <p className="text-[#8A898C] text-sm mb-2">@supplierhub_bot</p>
              <p className="text-[#8A898C] text-sm mb-4">Быстрые ответы</p>
              <Button className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]">
                Перейти в бот
              </Button>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-[#222222] mb-6">Форма обратной связи</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="topic">Тема обращения</Label>
                <Select>
                  <SelectTrigger id="topic">
                    <SelectValue placeholder="Выберите тему" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Общий вопрос</SelectItem>
                    <SelectItem value="tech">Техническая проблема</SelectItem>
                    <SelectItem value="payment">Вопрос по оплате</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <textarea 
                  id="message"
                  className="w-full min-h-[150px] px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Опишите вашу проблему или вопрос..."
                />
              </div>
              <Button className="bg-[#1EAEDB] hover:bg-[#0FA0CE]">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить запрос
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default OtherPages;
