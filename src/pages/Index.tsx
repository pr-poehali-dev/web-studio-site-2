import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'team', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'team', label: 'Команда' },
    { id: 'blog', label: 'Блог' },
    { id: 'contact', label: 'Контакты' },
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Веб-дизайн',
      description: 'Создаём уникальные дизайны, которые выделяют ваш бренд среди конкурентов',
    },
    {
      icon: 'Layout',
      title: 'UI/UX дизайн',
      description: 'Проектируем интерфейсы с фокусом на удобство и конверсию',
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разрабатываем адаптивные решения для всех устройств',
    },
    {
      icon: 'Zap',
      title: 'Прототипирование',
      description: 'Быстрая визуализация идей с интерактивными прототипами',
    },
  ];

  const portfolio = [
    {
      title: 'E-commerce платформа',
      category: 'Веб-дизайн',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Фитнес приложение',
      category: 'UI/UX',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Финтех стартап',
      category: 'Веб-дизайн',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Социальная сеть',
      category: 'UI/UX',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Образовательная платформа',
      category: 'Веб-дизайн',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Booking система',
      category: 'UI/UX',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      role: 'Арт-директор',
      icon: 'User',
    },
    {
      name: 'Мария Петрова',
      role: 'UI/UX дизайнер',
      icon: 'User',
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Веб-дизайнер',
      icon: 'User',
    },
    {
      name: 'Анна Волкова',
      role: 'Графический дизайнер',
      icon: 'User',
    },
  ];

  const blogPosts = [
    {
      title: 'Тренды веб-дизайна 2025',
      date: '15 декабря 2024',
      category: 'Дизайн',
    },
    {
      title: 'Как создать идеальный UX',
      date: '10 декабря 2024',
      category: 'UI/UX',
    },
    {
      title: 'Цветовая психология в дизайне',
      date: '5 декабря 2024',
      category: 'Теория',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            WebStudio
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Создаём дизайн,
            <br />
            который продаёт
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Веб-студия нового поколения. Разрабатываем пользовательские интерфейсы, которые
            конвертируют посетителей в клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              Начать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-lg px-8 py-6 hover:bg-primary/10"
              onClick={() => scrollToSection('portfolio')}
            >
              Посмотреть работы
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary">120+</div>
              <div className="text-sm text-muted-foreground mt-2">Проектов</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground mt-2">Клиентов</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground mt-2">Лет опыта</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-muted-foreground mt-2">Удовлетворённых</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к разработке цифровых продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Icon
                      name="Eye"
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Креативные специалисты с горящими глазами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 animate-slide-up text-center bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={member.icon} size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Делимся знаниями и опытом в дизайне
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 cursor-pointer animate-fade-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Готовы начать проект? Напишите нам!
            </p>
          </div>

          <Card className="animate-scale-in bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тема</label>
                  <Input placeholder="О чём хотите поговорить?" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    className="bg-background/50"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">hello@webstudio.com</div>
                </div>
                <div>
                  <Icon name="Phone" size={24} className="mx-auto mb-2 text-secondary" />
                  <div className="text-sm font-medium">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                </div>
                <div>
                  <Icon name="MapPin" size={24} className="mx-auto mb-2 text-accent" />
                  <div className="text-sm font-medium">Адрес</div>
                  <div className="text-sm text-muted-foreground">Москва, Россия</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              WebStudio
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-secondary">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Github" size={20} />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 WebStudio. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
