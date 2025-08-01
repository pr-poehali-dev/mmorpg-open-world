import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const categories = [
    { id: "all", name: "Все темы", icon: "MessageSquare", count: 156 },
    { id: "general", name: "Общее обсуждение", icon: "Users", count: 45 },
    { id: "guides", name: "Гайды и советы", icon: "BookOpen", count: 23 },
    { id: "pvp", name: "PvP и арена", icon: "Swords", count: 34 },
    { id: "guilds", name: "Гильдии", icon: "Shield", count: 28 },
    { id: "trading", name: "Торговля", icon: "Coins", count: 19 },
    { id: "bugs", name: "Баги и предложения", icon: "Bug", count: 7 },
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Лучшая сборка для мага огня 2024",
      author: "FireMaster",
      avatar: "FM",
      category: "guides",
      replies: 23,
      views: 456,
      lastReply: "2 часа назад",
      isSticky: true,
      tags: ["гайд", "маг", "PvE"]
    },
    {
      id: 2,
      title: "Ищем активных игроков в гильдию 'Драконы'",
      author: "DragonLeader",
      avatar: "DL",
      category: "guilds",
      replies: 15,
      views: 234,
      lastReply: "30 минут назад",
      isSticky: false,
      tags: ["гильдия", "рекрутинг"]
    },
    {
      id: 3,
      title: "Проблема с подключением к серверу",
      author: "TechUser",
      avatar: "TU",
      category: "bugs",
      replies: 8,
      views: 189,
      lastReply: "1 час назад",
      isSticky: false,
      tags: ["баг", "подключение"]
    },
    {
      id: 4,
      title: "Обмен редких артефактов",
      author: "TraderMax",
      avatar: "TM",
      category: "trading",
      replies: 42,
      views: 678,
      lastReply: "15 минут назад",
      isSticky: false,
      tags: ["торговля", "артефакты"]
    },
    {
      id: 5,
      title: "Стратегии для арены 3v3",
      author: "PvPPro",
      avatar: "PP",
      category: "pvp",
      replies: 31,
      views: 512,
      lastReply: "45 минут назад",
      isSticky: false,
      tags: ["PvP", "арена", "стратегия"]
    },
  ];

  const privateMessages = [
    {
      id: 1,
      sender: "AdminHelper",
      subject: "Добро пожаловать в игру!",
      preview: "Привет! Спасибо за регистрацию в Mystical Realms...",
      time: "3 часа назад",
      isRead: false
    },
    {
      id: 2,
      sender: "GuildMaster",
      subject: "Приглашение в гильдию",
      preview: "Мы заметили твои достижения и хотели бы пригласить...",
      time: "1 день назад",
      isRead: true
    },
    {
      id: 3,
      sender: "EventManager",
      subject: "Награда за участие в турнире",
      preview: "Поздравляем! Ты получил награду за участие...",
      time: "2 дня назад",
      isRead: true
    },
  ];

  const filteredPosts = selectedCategory === "all" 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Форум
              </h1>
              <p className="text-xl text-gray-300">
                Общайся с другими игроками, делись опытом и находи новых друзей
              </p>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="Plus" className="mr-2" />
                  Создать тему
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-purple-500/50 text-white">
                <DialogHeader>
                  <DialogTitle>Создать новую тему</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Заголовок темы"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <Textarea
                    placeholder="Содержание сообщения"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-32"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Опубликовать
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="forum" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-purple-900/50 mb-8">
            <TabsTrigger value="forum" className="data-[state=active]:bg-purple-600">
              <Icon name="MessageSquare" className="mr-2" />
              Форум
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-purple-600">
              <Icon name="Mail" className="mr-2" />
              Личные сообщения
              <Badge className="ml-2 bg-red-500 text-white">
                {privateMessages.filter(msg => !msg.isRead).length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forum">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="List" className="mr-2" />
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
              </div>

              {/* Forum Posts */}
              <div className="lg:col-span-3 space-y-4">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-400/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {post.isSticky && (
                              <Badge className="bg-yellow-600 text-black">
                                <Icon name="Pin" size={12} className="mr-1" />
                                Закреплено
                              </Badge>
                            )}
                            <Badge variant="outline" className="border-purple-400 text-purple-300">
                              {categories.find(cat => cat.id === post.category)?.name}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-300 cursor-pointer">
                            {post.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="bg-purple-600 text-white text-xs">
                                  {post.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <span>{post.author}</span>
                            </div>
                            <span>•</span>
                            <span>{post.lastReply}</span>
                          </div>
                        </div>
                        
                        <div className="text-right text-sm text-gray-400 space-y-1">
                          <div className="flex items-center">
                            <Icon name="MessageCircle" size={16} className="mr-1" />
                            {post.replies}
                          </div>
                          <div className="flex items-center">
                            <Icon name="Eye" size={16} className="mr-1" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Личные сообщения</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Icon name="Plus" className="mr-2" size={16} />
                    Написать
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {privateMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-lg border-l-4 cursor-pointer transition-colors ${
                      message.isRead
                        ? "bg-gray-800/50 border-gray-600 hover:bg-gray-800/70"
                        : "bg-purple-900/30 border-purple-500 hover:bg-purple-900/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                            {message.sender.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className={`font-semibold ${message.isRead ? "text-gray-300" : "text-white"}`}>
                            {message.sender}
                          </h4>
                          <p className="text-sm text-gray-400">{message.time}</p>
                        </div>
                      </div>
                      {!message.isRead && (
                        <Badge className="bg-red-500 text-white">Новое</Badge>
                      )}
                    </div>
                    <h5 className={`font-medium mb-1 ${message.isRead ? "text-gray-300" : "text-white"}`}>
                      {message.subject}
                    </h5>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {message.preview}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Forum;