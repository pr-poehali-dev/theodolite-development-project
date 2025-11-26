interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Теодолит</h1>
          <div className="hidden md:flex gap-6">
            {['hero', 'definition', 'areas', 'principle', 'cost', 'specs', 'examples'].map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
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
  );
};

export default Navigation;
