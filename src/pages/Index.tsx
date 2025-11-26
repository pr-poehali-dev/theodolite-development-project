import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Теодолит</h1>
            <div className="hidden md:flex gap-6">
              {['hero', 'definition', 'areas', 'principle', 'cost', 'specs', 'examples'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {section === 'hero' && 'Главная'}
                  {section === 'definition' && 'Определение'}
                  {section === 'areas' && 'Применение'}
                  {section === 'principle' && 'Принцип'}
                  {section === 'cost' && 'Стоимость'}
                  {section === 'specs' && 'Характеристики'}
                  {section === 'examples' && 'Примеры'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center animate-fade-in-up">
          <Badge className="mb-6 text-lg px-6 py-2" variant="secondary">
            Образовательный проект
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Теодолит
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Прецизионный геодезический инструмент для измерения горизонтальных и вертикальных углов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('definition')} className="text-lg px-8">
              Начать изучение
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('examples')} className="text-lg px-8">
              Примеры использования
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img 
              src="https://cdn.poehali.dev/projects/69e046a4-6115-4cdf-ba18-222bde74df71/files/6f11e759-ea92-4855-a330-fc16628e95d6.jpg"
              alt="Теодолит"
              className="mx-auto max-w-2xl w-full rounded-2xl shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section id="definition" className="min-h-screen flex items-center py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center animate-fade-in">Что такое теодолит?</h2>
            <Card className="animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="BookOpen" className="text-primary" size={32} />
                  Определение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Теодолит</strong> — это высокоточный геодезический инструмент, 
                  предназначенный для измерения горизонтальных и вертикальных углов, а также для определения 
                  направлений и расстояний при проведении топографических, геодезических и строительных работ.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Icon name="Target" className="text-primary mb-2" size={28} />
                    <h4 className="font-semibold mb-2">Точность</h4>
                    <p className="text-sm text-muted-foreground">Высокая прецизионность измерений</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <Icon name="Layers" className="text-secondary mb-2" size={28} />
                    <h4 className="font-semibold mb-2">Универсальность</h4>
                    <p className="text-sm text-muted-foreground">Множество областей применения</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <Icon name="Zap" className="text-accent mb-2" size={28} />
                    <h4 className="font-semibold mb-2">Технологичность</h4>
                    <p className="text-sm text-muted-foreground">Современные цифровые системы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="areas" className="min-h-screen flex items-center py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">Области применения</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'Building2',
                title: 'Строительство',
                description: 'Разметка участков, контроль вертикальности конструкций, установка опалубки',
                color: 'primary'
              },
              {
                icon: 'Map',
                title: 'Геодезия',
                description: 'Топографическая съёмка местности, создание карт и планов территорий',
                color: 'secondary'
              },
              {
                icon: 'Mountain',
                title: 'Маркшейдерия',
                description: 'Измерения в горнодобывающей промышленности и подземных сооружениях',
                color: 'accent'
              },
              {
                icon: 'Route',
                title: 'Дорожное строительство',
                description: 'Проектирование трасс, контроль уклонов, разбивка дорожного полотна',
                color: 'primary'
              },
              {
                icon: 'Home',
                title: 'Архитектура',
                description: 'Обмеры зданий, контроль геометрии, реставрационные работы',
                color: 'secondary'
              },
              {
                icon: 'Landmark',
                title: 'Археология',
                description: 'Картографирование раскопок, фиксация находок, документирование объектов',
                color: 'accent'
              }
            ].map((area, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Icon name={area.icon as any} className={`text-${area.color} mb-3`} size={40} />
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="principle" className="min-h-screen flex items-center py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">Принцип работы</h2>
          
          <Tabs defaultValue="optical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="optical">Оптический</TabsTrigger>
              <TabsTrigger value="electronic">Электронный</TabsTrigger>
              <TabsTrigger value="laser">Лазерный</TabsTrigger>
            </TabsList>
            
            <TabsContent value="optical" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Eye" className="text-primary" />
                    Оптический теодолит
                  </CardTitle>
                  <CardDescription>Классическая система измерений</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <p>Зрительная труба направляется на цель для визирования</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <p>Угловые круги (лимбы) с градусной разметкой фиксируют положение</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <p>Оператор снимает показания через отсчётный микроскоп</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">4</Badge>
                      <p>Вычисляются горизонтальные и вертикальные углы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="electronic" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Cpu" className="text-secondary" />
                    Электронный теодолит
                  </CardTitle>
                  <CardDescription>Цифровая обработка данных</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <p>Цифровые датчики автоматически считывают положение угловых кругов</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <p>Процессор обрабатывает данные в реальном времени</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <p>Результаты отображаются на цифровом дисплее</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">4</Badge>
                      <p>Данные сохраняются в памяти или передаются на компьютер</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="laser" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Radio" className="text-accent" />
                    Лазерный теодолит
                  </CardTitle>
                  <CardDescription>Бесконтактные измерения</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">1</Badge>
                      <p>Лазерный луч направляется на отражатель или поверхность</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">2</Badge>
                      <p>Измеряется время прохождения луча до цели и обратно</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">3</Badge>
                      <p>Вычисляются расстояние и углы с высокой точностью</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Badge variant="outline" className="mt-1">4</Badge>
                      <p>Данные интегрируются в единую систему координат</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="cost" className="min-h-screen flex items-center py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">Стоимость оборудования</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Начальный уровень</Badge>
                <CardTitle>Оптические теодолиты</CardTitle>
                <CardDescription>Для базовых измерений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-4">15-50 тыс. ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Механический отсчёт
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Точность 10-30″
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Простота обслуживания
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Надёжность
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Средний уровень</Badge>
                <CardTitle>Электронные теодолиты</CardTitle>
                <CardDescription>Оптимальное соотношение</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-4">50-150 тыс. ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Цифровой дисплей
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Точность 2-10″
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Память данных
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    USB-соединение
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Профессиональный</Badge>
                <CardTitle>Тахеометры</CardTitle>
                <CardDescription>Максимальные возможности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-4">150-500+ тыс. ₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Лазерный дальномер
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Точность 1-5″
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Автоматизация
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Bluetooth/Wi-Fi
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="specs" className="min-h-screen flex items-center py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">Технические характеристики</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">Параметр</th>
                  <th className="p-4 text-left font-semibold">Оптический</th>
                  <th className="p-4 text-left font-semibold">Электронный</th>
                  <th className="p-4 text-left font-semibold">Лазерный</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    param: 'Точность измерения углов',
                    optical: '10-30″',
                    electronic: '2-10″',
                    laser: '1-5″'
                  },
                  {
                    param: 'Дальность измерений',
                    optical: 'До 200 м',
                    electronic: 'До 500 м',
                    laser: 'До 5000 м'
                  },
                  {
                    param: 'Время установки',
                    optical: '5-10 мин',
                    electronic: '3-5 мин',
                    laser: '2-3 мин'
                  },
                  {
                    param: 'Увеличение трубы',
                    optical: '20-30×',
                    electronic: '30-40×',
                    laser: '30-50×'
                  },
                  {
                    param: 'Память измерений',
                    optical: '—',
                    electronic: '2000-10000',
                    laser: '10000+'
                  },
                  {
                    param: 'Вес',
                    optical: '4-6 кг',
                    electronic: '3-5 кг',
                    laser: '4-7 кг'
                  },
                  {
                    param: 'Время работы от АКБ',
                    optical: '—',
                    electronic: '8-12 ч',
                    laser: '6-10 ч'
                  },
                  {
                    param: 'Защита от влаги',
                    optical: 'IP54',
                    electronic: 'IP54-IP65',
                    laser: 'IP65-IP66'
                  }
                ].map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border hover:bg-muted/50 transition-colors ${
                      index % 2 === 0 ? 'bg-muted/20' : ''
                    }`}
                  >
                    <td className="p-4 font-medium">{row.param}</td>
                    <td className="p-4">{row.optical}</td>
                    <td className="p-4">{row.electronic}</td>
                    <td className="p-4">{row.laser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="examples" className="min-h-screen flex items-center py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">Примеры использования</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://cdn.poehali.dev/projects/69e046a4-6115-4cdf-ba18-222bde74df71/files/134abbc7-232a-4085-80b1-46ade0b9f2ee.jpg"
                    alt="Теодолит на стройке"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3">Строительство</Badge>
                  <h3 className="text-2xl font-bold mb-3">Разметка строительной площадки</h3>
                  <p className="text-muted-foreground mb-4">
                    Использование теодолита для точной разметки осей здания, контроля вертикальности 
                    колонн и стен, установки опалубки на заданные отметки.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Точность ±2мм</Badge>
                    <Badge variant="outline">До 100м</Badge>
                    <Badge variant="outline">3D координаты</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <Icon name="Map" className="mx-auto text-primary" size={80} />
                      <p className="text-lg font-semibold">Топографическая съёмка</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3" variant="secondary">Геодезия</Badge>
                  <h3 className="text-2xl font-bold mb-3">Картографирование местности</h3>
                  <p className="text-muted-foreground mb-4">
                    Создание топографических планов и карт территорий с отображением рельефа, 
                    коммуникаций, зданий и других объектов местности.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Масштаб 1:500</Badge>
                    <Badge variant="outline">Высотная съёмка</Badge>
                    <Badge variant="outline">ГИС-данные</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <Icon name="Route" className="mx-auto text-accent" size={80} />
                      <p className="text-lg font-semibold">Дорожное строительство</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3">Инфраструктура</Badge>
                  <h3 className="text-2xl font-bold mb-3">Проектирование дорог</h3>
                  <p className="text-muted-foreground mb-4">
                    Разбивка осей трасс автомобильных дорог, контроль уклонов, проектирование 
                    развязок и установка дорожных знаков с точным позиционированием.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Продольный профиль</Badge>
                    <Badge variant="outline">Поперечники</Badge>
                    <Badge variant="outline">Кривые участки</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Теодолит</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Образовательный проект о современных геодезических инструментах и технологиях измерений
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="BookOpen" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © 2024 Образовательный проект. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
