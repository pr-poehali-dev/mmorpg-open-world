import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все гайды", icon: "BookOpen", count: 47 },
    { id: "beginner", name: "Для новичков", icon: "GraduationCap", count: 12 },
    { id: "classes", name: "Классы", icon: "User", count: 15 },
    { id: "pvp", name: "PvP", icon: "Swords", count: 8 },
    { id: "pve", name: "PvE", icon: "Shield", count: 10 },
    { id: "crafting", name: "Крафт", icon: "Hammer", count: 7 },
  ];

  const guides = [
    {
      id: 1,
      title: "Полный гайд по новичку в Mystical Realms",
      author: "GuideExpert",
      avatar: "GE",
      category: "beginner",
      difficulty: "Новичок",
      readTime: "15 мин",
      rating: 4.9,
      views: 15420,
      description: "Подробное руководство для тех, кто только начинает свое путешествие в мире Mystical Realms",
      tags: ["новичок", "основы", "первые шаги"],
      lastUpdated: "3 дня назад",
      isPopular: true
    },
    {
      id: 2,
      title: "Лучшие билды мага огня для рейдов",
      author: "FireMaster",
      avatar: "FM",
      category: "classes",
      difficulty: "Продвинутый",
      readTime: "25 мин",
      rating: 4.8,
      views: 8934,
      description: "Разбор эффективных сборок мага огня для различных типов рейдового контента",
      tags: ["маг", "огонь", "билд", "рейд"],
      lastUpdated: "1 неделю назад",
      isPopular: true
    },
    {
      id: 3,
      title: "Крафт легендарных доспехов: пошаговое руководство",
      author: "CraftMaster",
      avatar: "CM",
      category: "crafting",
      difficulty: "Средний",
      readTime: "20 мин",
      rating: 4.7,
      views: 6721,
      description: "Детальное руководство по созданию легендарных доспехов с указанием всех необходимых материалов",
      tags: ["крафт", "доспехи", "легендарные"],
      lastUpdated: "5 дней назад",
      isPopular: false
    },
    {
      id: 4,
      title: "Стратегии PvP: как побеждать в арене",
      author: "PvPChampion",
      avatar: "PC",
      category: "pvp",
      difficulty: "Продвинутый",
      readTime: "30 мин",
      rating: 4.6,
      views: 5432,
      description: "Продвинутые тактики и стратегии для доминирования в PvP сражениях",
      tags: ["PvP", "арена", "стратегия", "тактика"],
      lastUpdated: "2 дня назад",
      isPopular: false
    },
    {
      id: 5,
      title: "Прохождение подземелья 'Логово Дракона'",
      author: "RaidLeader",
      avatar: "RL",
      category: "pve",
      difficulty: "Сложный",
      readTime: "35 мин",
      rating: 4.9,
      views: 12890,
      description: "Подробная стратегия прохождения одного из самых сложных подземелий в игре",
      tags: ["PvE", "подземелье", "дракон", "рейд"],
      lastUpdated: "1 день назад",
      isPopular: true
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Новичок": return "bg-green-600";
      case "Средний": return "bg-yellow-600";
      case "Продвинутый": return "bg-orange-600";
      case "Сложный": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === "all" || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Гайды по игре
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Изучай игровые механики, осваивай новые стратегии и становись лучшим игроком
          </p>
          
          {/* Search */}
          <div className="max-w-md">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Поиск гайдов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Filter" className="mr-2" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-purple-600/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name={category.icon as any} size={18} />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-gray-600 text-white">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Hash" className="mr-2" />
                  Популярные теги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["новичок", "маг", "PvP", "рейд", "крафт", "билд", "стратегия", "арена"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-purple-400 text-purple-300 cursor-pointer hover:bg-purple-500 hover:text-white"
                      onClick={() => setSearchTerm(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guides Grid */}
          <div className="lg:col-span-3 space-y-6">
            {filteredGuides.map((guide) => (
              <Card key={guide.id} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        {guide.isPopular && (
                          <Badge className="bg-yellow-600 text-black">
                            <Icon name="Star" size={12} className="mr-1" />
                            Популярный
                          </Badge>
                        )}
                        <Badge className={getDifficultyColor(guide.difficulty)}>
                          {guide.difficulty}
                        </Badge>
                        <Badge variant="outline" className="border-purple-400 text-purple-300">
                          {categories.find(cat => cat.id === guide.category)?.name}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-purple-300">
                        {guide.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {guide.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {guide.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="bg-purple-600 text-white text-xs">
                                {guide.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <span>{guide.author}</span>
                          </div>
                          <span>•</span>
                          <span>{guide.lastUpdated}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {guide.readTime}
                          </div>
                        </div>
                        
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <Icon name="BookOpen" className="mr-2" size={16} />
                          Читать
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right text-sm text-gray-400 space-y-2 ml-6">
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="mr-1 text-yellow-400" />
                        {guide.rating}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Eye" size={16} className="mr-1" />
                        {guide.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Рекомендуемые гайды
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(guide => guide.isPopular).slice(0, 3).map((guide) => (
              <Card key={guide.id} className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-600 text-white">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      Популярный
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Icon name="Star" size={16} className="mr-1" />
                      {guide.rating}
                    </div>
                  </div>
                  <CardTitle className="text-white line-clamp-2">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {guide.readTime}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Eye" size={14} className="mr-1" />
                      {guide.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    <Icon name="BookOpen" className="mr-2" size={16} />
                    Изучить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guides;