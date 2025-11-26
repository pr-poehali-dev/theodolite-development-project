import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
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
          <Button size="lg" onClick={() => onNavigate('definition')} className="text-lg px-8">
            Начать изучение
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('examples')} className="text-lg px-8">
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
  );
};

export default HeroSection;
