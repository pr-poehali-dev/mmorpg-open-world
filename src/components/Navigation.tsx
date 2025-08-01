import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "О нас", path: "/about", icon: "Users" },
    { name: "Форум", path: "/forum", icon: "MessageSquare" },
    { name: "Гайды", path: "/guides", icon: "BookOpen" },
    { name: "Поддержка", path: "/support", icon: "HelpCircle" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MYSTICAL REALMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-purple-600/20"
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white">
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Написать
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Icon name="Download" className="mr-2" size={16} />
              Скачать
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-white">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-purple-500/30">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-purple-600/20"
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <hr className="border-purple-500/30 my-4" />
                <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white justify-start">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Написать
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 justify-start">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать клиент
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;