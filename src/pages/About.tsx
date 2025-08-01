import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const About = () => {
  const team = [
    {
      name: "Александр Волков",
      role: "Главный разработчик",
      experience: "15 лет",
      avatar: "АВ",
      description: "Ветеран игровой индустрии, создатель множества успешных MMORPG"
    },
    {
      name: "Мария Коннор",
      role: "Арт-директор",
      experience: "12 лет",
      avatar: "МК",
      description: "Художник-визионер, создавший уникальный стиль Mystical Realms"
    },
    {
      name: "Дмитрий Сергеев",
      role: "Гейм-дизайнер",
      experience: "10 лет",
      avatar: "ДС",
      description: "Мастер игровой механики и баланса персонажей"
    },
    {
      name: "Елена Браун",
      role: "Менеджер сообщества",
      experience: "8 лет",
      avatar: "ЕБ",
      description: "Связующее звено между игроками и командой разработки"
    },
  ];

  const achievements = [
    { icon: "Users", title: "500,000+", subtitle: "Активных игроков" },
    { icon: "Globe", title: "50+", subtitle: "Стран мира" },
    { icon: "Trophy", title: "95%", subtitle: "Положительных отзывов" },
    { icon: "Clock", title: "24/7", subtitle: "Поддержка игроков" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            О нашей студии
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Мы - команда страстных разработчиков, создающих незабываемые игровые миры уже более 10 лет
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Наша история
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Все началось в 2014 году, когда небольшая группа энтузиастов решила создать MMORPG, 
                  которая объединила бы лучшие элементы классических игр с современными технологиями.
                </p>
                <p className="text-lg">
                  После 3 лет разработки мы выпустили первую версию Mystical Realms, которая сразу же 
                  завоевала сердца игроков по всему миру своей глубокой механикой и захватывающим сюжетом.
                </p>
                <p className="text-lg">
                  Сегодня наша игра объединяет более полумиллиона активных игроков, и мы продолжаем 
                  развивать этот удивительный мир, добавляя новые континенты, классы и приключения.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50 text-center">
                  <CardHeader className="pb-4">
                    <Icon name={achievement.icon as any} size={48} className="text-purple-400 mx-auto mb-4" />
                    <CardTitle className="text-3xl font-bold text-white">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{achievement.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Наша команда
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <Badge variant="outline" className="border-purple-400 text-purple-300 mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-400">
                    <Icon name="Award" size={16} className="inline mr-2" />
                    Опыт: {member.experience}
                  </p>
                  <p className="text-sm text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Наша миссия
            </h2>
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Target" size={32} className="text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Создавать миры мечты</h3>
                      <p className="text-gray-300">
                        Мы стремимся создавать игровые вселенные, где каждый игрок может найти свое место 
                        и прожить незабываемые приключения.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Icon name="Heart" size={32} className="text-red-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Объединять людей</h3>
                      <p className="text-gray-300">
                        Наши игры создают крепкие дружеские связи и сообщества, которые существуют 
                        не только в виртуальном мире, но и в реальной жизни.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Icon name="Zap" size={32} className="text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Внедрять инновации</h3>
                      <p className="text-gray-300">
                        Мы постоянно экспериментируем с новыми технологиями и игровыми механиками, 
                        чтобы предложить игрокам уникальный опыт.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Хотите узнать больше о наших проектах или присоединиться к команде? Мы всегда рады новым знакомствам!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-black/20 border-purple-500/50">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">contact@mysticalrealms.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/20 border-purple-500/50">
              <CardContent className="p-6 text-center">
                <Icon name="MessageSquare" size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Discord</h3>
                <p className="text-gray-300">MysticalRealms#1234</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/20 border-purple-500/50">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Офис</h3>
                <p className="text-gray-300">Москва, Россия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;