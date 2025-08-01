import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Support = () => {
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    { id: "account", name: "Аккаунт и безопасность", icon: "Shield", count: 12 },
    { id: "gameplay", name: "Игровой процесс", icon: "Gamepad2", count: 18 },
    { id: "technical", name: "Технические проблемы", icon: "Settings", count: 15 },
    { id: "payment", name: "Платежи и покупки", icon: "CreditCard", count: 8 },
    { id: "reporting", name: "Жалобы и нарушения", icon: "Flag", count: 6 },
  ];

  const faqItems = [
    {
      id: 1,
      category: "account",
      question: "Как восстановить пароль от аккаунта?",
      answer: "Нажмите на ссылку 'Забыли пароль?' на странице входа, введите ваш email и следуйте инструкциям в письме.",
      isPopular: true
    },
    {
      id: 2,
      category: "gameplay",
      question: "Как сменить класс персонажа?",
      answer: "Смена класса возможна с 10 уровня через NPC 'Наставник классов' в главном городе за игровую валюту.",
      isPopular: true
    },
    {
      id: 3,
      category: "technical",
      question: "Игра не запускается, что делать?",
      answer: "Проверьте системные требования, обновите драйверы видеокарты и запустите игру от имени администратора.",
      isPopular: true
    },
    {
      id: 4,
      category: "payment",
      question: "Как вернуть средства за покупку?",
      answer: "Обратитесь в службу поддержки в течение 14 дней с указанием номера транзакции.",
      isPopular: false
    },
    {
      id: 5,
      category: "gameplay",
      question: "Где найти редкие материалы для крафта?",
      answer: "Редкие материалы можно получить в высокоуровневых подземельях, через торговцев или крафт.",
      isPopular: false
    },
    {
      id: 6,
      category: "account",
      question: "Как настроить двухфакторную аутентификацию?",
      answer: "Зайдите в настройки аккаунта, выберите 'Безопасность' и активируйте 2FA через мобильное приложение.",
      isPopular: false
    },
  ];

  const supportTickets = [
    {
      id: "T-2024-001",
      subject: "Проблема с подключением к серверу",
      status: "В обработке",
      priority: "Высокий",
      created: "2 часа назад",
      lastUpdate: "30 мин назад"
    },
    {
      id: "T-2024-002",
      subject: "Вопрос по возврату средств",
      status: "Ожидает ответа",
      priority: "Средний",
      created: "1 день назад",
      lastUpdate: "6 часов назад"
    },
    {
      id: "T-2024-003",
      subject: "Баг с квестом 'Логово дракона'",
      status: "Решен",
      priority: "Низкий",
      created: "3 дня назад",
      lastUpdate: "1 день назад"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "В обработке": return "bg-blue-600";
      case "Ожидает ответа": return "bg-yellow-600";
      case "Решен": return "bg-green-600";
      default: return "bg-gray-600";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Высокий": return "bg-red-600";
      case "Средний": return "bg-yellow-600";
      case "Низкий": return "bg-green-600";
      default: return "bg-gray-600";
    }
  };

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Техническая поддержка
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Мы здесь, чтобы помочь вам решить любые вопросы и проблемы
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="MessageSquare" className="mr-2" />
                  Создать тикет
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-purple-500/50 text-white max-w-lg">
                <DialogHeader>
                  <DialogTitle>Создать обращение в поддержку</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Категория</label>
                    <Select value={ticketCategory} onValueChange={setTicketCategory}>
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="technical">Технические проблемы</SelectItem>
                        <SelectItem value="account">Проблемы с аккаунтом</SelectItem>
                        <SelectItem value="payment">Платежи и покупки</SelectItem>
                        <SelectItem value="gameplay">Игровой процесс</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Input
                    placeholder="Тема обращения"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Textarea
                    placeholder="Подробно опишите вашу проблему"
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-32"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Отправить обращение
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white">
              <Icon name="MessageCircle" className="mr-2" />
              Живой чат
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-purple-900/50 mb-8">
            <TabsTrigger value="faq" className="data-[state=active]:bg-purple-600">
              <Icon name="HelpCircle" className="mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="tickets" className="data-[state=active]:bg-purple-600">
              <Icon name="Ticket" className="mr-2" />
              Мои обращения
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-purple-600">
              <Icon name="Phone" className="mr-2" />
              Контакты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* FAQ Categories */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 mb-6">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="List" className="mr-2" />
                      Категории
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {faqCategories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-purple-600/20 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name={category.icon as any} size={18} className="text-purple-400" />
                          <span className="text-sm text-gray-300">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="bg-gray-600 text-white">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Search */}
                <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Search" className="mr-2" />
                      Поиск
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input
                      placeholder="Поиск по FAQ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Items */}
              <div className="lg:col-span-3 space-y-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {searchTerm ? "Результаты поиска" : "Популярные вопросы"}
                  </h2>
                  
                  {searchTerm === "" && (
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {faqItems.filter(item => item.isPopular).map((item) => (
                        <Card key={item.id} className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/30 cursor-pointer hover:border-green-400/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-2 mb-2">
                              <Icon name="Star" size={16} className="text-yellow-400 mt-1" />
                              <h3 className="font-semibold text-white line-clamp-2">{item.question}</h3>
                            </div>
                            <p className="text-sm text-gray-300 line-clamp-3">{item.answer}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>

                {filteredFAQ.map((item) => (
                  <Card key={item.id} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white flex-1 pr-4">
                          {item.question}
                        </h3>
                        {item.isPopular && (
                          <Badge className="bg-yellow-600 text-black">
                            <Icon name="TrendingUp" size={12} className="mr-1" />
                            Популярный
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <button className="flex items-center hover:text-green-400 transition-colors">
                            <Icon name="ThumbsUp" size={16} className="mr-1" />
                            Полезно
                          </button>
                          <button className="flex items-center hover:text-red-400 transition-colors">
                            <Icon name="ThumbsDown" size={16} className="mr-1" />
                            Не помогло
                          </button>
                        </div>
                        <Badge variant="outline" className="border-purple-400 text-purple-300">
                          {faqCategories.find(cat => cat.id === item.category)?.name}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tickets">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Мои обращения</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Icon name="Plus" className="mr-2" />
                      Создать тикет
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>

              {supportTickets.map((ticket) => (
                <Card key={ticket.id} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">#{ticket.id}</h3>
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </div>
                        <h4 className="text-white mb-2">{ticket.subject}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Создан: {ticket.created}</span>
                          <span>•</span>
                          <span>Обновлен: {ticket.lastUpdate}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Просмотр
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Способы связи</h2>
                
                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-600 rounded-lg">
                          <Icon name="Mail" size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Email поддержка</h3>
                          <p className="text-gray-300">support@mysticalrealms.com</p>
                          <p className="text-sm text-gray-400">Ответ в течение 24 часов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border-blue-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-600 rounded-lg">
                          <Icon name="MessageCircle" size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Живой чат</h3>
                          <p className="text-gray-300">Онлайн: 24/7</p>
                          <p className="text-sm text-gray-400">Мгновенная поддержка</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-900/30 to-purple-900/30 border-green-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-600 rounded-lg">
                          <Icon name="MessageSquare" size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Discord</h3>
                          <p className="text-gray-300">MysticalRealms#Support</p>
                          <p className="text-sm text-gray-400">Сообщество и поддержка</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Время работы поддержки</h2>
                
                <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 mb-6">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Понедельник - Пятница</span>
                        <span className="text-white font-semibold">9:00 - 21:00 МСК</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Выходные</span>
                        <span className="text-white font-semibold">10:00 - 18:00 МСК</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Живой чат</span>
                        <span className="text-green-400 font-semibold">24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-900/30 to-red-900/30 border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Clock" className="mr-2" />
                      Среднее время ответа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Живой чат</span>
                        <span className="text-green-400 font-semibold">&lt; 2 мин</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Тикеты (высокий приоритет)</span>
                        <span className="text-yellow-400 font-semibold">&lt; 4 часа</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Email</span>
                        <span className="text-blue-400 font-semibold">&lt; 24 часа</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Support;