import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const topPlayers = [
    { rank: 1, name: "DragonSlayer", level: 85, guild: "Легенды", score: 15420 },
    { rank: 2, name: "MysticMage", level: 82, guild: "Архимаги", score: 14850 },
    { rank: 3, name: "ShadowHunter", level: 80, guild: "Тени", score: 14200 },
    { rank: 4, name: "FireKnight", level: 78, guild: "Огненный орден", score: 13890 },
    { rank: 5, name: "IceQueen", level: 77, guild: "Ледяные", score: 13450 },
  ];

  const events = [
    { date: "15 августа", name: "Турнир Гладиаторов", type: "PvP", reward: "Легендарное оружие" },
    { date: "18 августа", name: "Осада Замка", type: "Гильдии", reward: "Территория" },
    { date: "22 августа", name: "Охота на Дракона", type: "Рейд", reward: "Эпическая броня" },
    { date: "25 августа", name: "Фестиваль Магии", type: "Событие", reward: "Уникальные заклинания" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/07035c00-33dd-481f-8cec-93992f7fff6a.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            MYSTICAL REALMS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Погрузись в бесконечный мир приключений, где каждый шаг - новая легенда
          </p>
          
          {/* Trailer Video Placeholder */}
          <div className="mb-8 mx-auto max-w-2xl">
            <div className="aspect-video bg-black/70 rounded-lg flex items-center justify-center border-2 border-purple-500">
              <div className="text-center">
                <Icon name="Play" size={64} className="mx-auto mb-4 text-purple-400" />
                <p className="text-lg">Смотреть трейлер игры</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8">
              <Icon name="Download" className="mr-2" />
              Скачать клиент
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8">
              <Icon name="Users" className="mr-2" />
              Начать играть
            </Button>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Особенности игры
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50">
              <CardHeader>
                <Icon name="Globe" size={48} className="text-purple-400 mb-4" />
                <CardTitle className="text-white">Открытый мир</CardTitle>
                <CardDescription className="text-gray-300">
                  Исследуй огромный мир без границ с тысячами локаций
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/50">
              <CardHeader>
                <Icon name="Swords" size={48} className="text-red-400 mb-4" />
                <CardTitle className="text-white">Эпические битвы</CardTitle>
                <CardDescription className="text-gray-300">
                  Сражайся с драконами, участвуй в гильдейских войнах
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/50">
              <CardHeader>
                <Icon name="Crown" size={48} className="text-green-400 mb-4" />
                <CardTitle className="text-white">Стань легендой</CardTitle>
                <CardDescription className="text-gray-300">
                  Прокачивай персонажа, получай уникальные артефакты
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Players & Events */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <Tabs defaultValue="players" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-purple-900/50">
              <TabsTrigger value="players" className="data-[state=active]:bg-purple-600">
                <Icon name="Trophy" className="mr-2" />
                Топ игроков
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-purple-600">
                <Icon name="Calendar" className="mr-2" />
                События
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="players" className="mt-8">
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">Топ игроков недели</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPlayers.map((player) => (
                    <div key={player.rank} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant={player.rank === 1 ? "default" : "secondary"} className={
                          player.rank === 1 ? "bg-yellow-500 text-black" : 
                          player.rank === 2 ? "bg-gray-400 text-black" :
                          player.rank === 3 ? "bg-amber-600 text-white" : "bg-gray-600"
                        }>
                          #{player.rank}
                        </Badge>
                        <Avatar>
                          <AvatarFallback className="bg-purple-600">{player.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-white">{player.name}</p>
                          <p className="text-sm text-gray-400">Гильдия: {player.guild}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">Уровень {player.level}</p>
                        <p className="text-sm text-purple-400">{player.score.toLocaleString()} очков</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="events" className="mt-8">
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">Календарь событий</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="p-4 bg-black/20 rounded-lg border-l-4 border-purple-500">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-lg">{event.name}</h3>
                        <Badge variant="outline" className="border-purple-400 text-purple-300">
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-gray-400 mb-2">📅 {event.date}</p>
                      <p className="text-yellow-400">🏆 Награда: {event.reward}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Готов к приключениям?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Скачай клиент игры и окунись в мир бесконечных возможностей
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-6 px-12">
              <Icon name="Download" className="mr-2" size={24} />
              Скачать для Windows
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white font-bold py-6 px-12">
              <Icon name="Smartphone" className="mr-2" size={24} />
              Скачать для Mac
            </Button>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-white">Системные требования</h3>
              <div className="text-left text-sm text-gray-300 space-y-2">
                <p>• Windows 10/11 64-bit</p>
                <p>• Intel i5-8400 / AMD Ryzen 5 2600</p>
                <p>• 16 GB RAM</p>
                <p>• GTX 1060 / RX 580</p>
                <p>• 50 GB свободного места</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MYSTICAL REALMS
          </h3>
          <div className="flex justify-center space-x-6 mb-6">
            <Icon name="Facebook" className="text-gray-400 hover:text-white cursor-pointer" />
            <Icon name="Twitter" className="text-gray-400 hover:text-white cursor-pointer" />
            <Icon name="Youtube" className="text-gray-400 hover:text-white cursor-pointer" />
            <Icon name="MessageSquare" className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <p className="text-gray-400">© 2024 Mystical Realms. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;