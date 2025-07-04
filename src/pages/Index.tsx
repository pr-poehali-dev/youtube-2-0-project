import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const videos = [
    {
      id: 1,
      title: "Создание React приложения с нуля",
      author: "DevChannel",
      views: "1.2M",
      time: "2 дня назад",
      duration: "15:24",
      thumbnail: "/img/3385d9bb-8a55-4e87-bbce-d6c8328fe017.jpg",
    },
    {
      id: 2,
      title: "Топ 10 JavaScript фреймворков 2024",
      author: "TechReview",
      views: "854K",
      time: "1 неделю назад",
      duration: "12:45",
      thumbnail: "/img/6c69c9c3-8378-43fa-a15c-ee01efa1b728.jpg",
    },
    {
      id: 3,
      title: "Обзор новой игры - Cyberpunk 2077",
      author: "GamersHub",
      views: "2.3M",
      time: "3 дня назад",
      duration: "20:18",
      thumbnail: "/img/2c9c65bf-ccfb-4076-9e6c-b4d6fd1813cc.jpg",
    },
    {
      id: 4,
      title: "Основы TypeScript за 30 минут",
      author: "DevChannel",
      views: "567K",
      time: "5 дней назад",
      duration: "28:15",
      thumbnail: "/img/3385d9bb-8a55-4e87-bbce-d6c8328fe017.jpg",
    },
    {
      id: 5,
      title: "Настройка VS Code для фронтенда",
      author: "CodeMaster",
      views: "321K",
      time: "1 неделю назад",
      duration: "18:32",
      thumbnail: "/img/6c69c9c3-8378-43fa-a15c-ee01efa1b728.jpg",
    },
    {
      id: 6,
      title: "Лучшие моменты стрима по CS2",
      author: "ProGamer",
      views: "1.8M",
      time: "2 дня назад",
      duration: "45:12",
      thumbnail: "/img/2c9c65bf-ccfb-4076-9e6c-b4d6fd1813cc.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Header */}
      <header className="bg-[#1F1F1F] border-b border-[#303030] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Play" className="w-8 h-8 text-red-600" />
                <span className="text-2xl font-bold">YouTube 2.0</span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Поиск видео..."
                  className="w-full bg-[#121212] border-[#303030] text-white placeholder-gray-400 pr-12"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-0 h-full px-4 bg-[#303030] hover:bg-[#404040] border-l border-[#404040]"
                >
                  <Icon name="Search" className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white"
              >
                <Icon name="Upload" className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white"
              >
                <Icon name="Bell" className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-red-600 text-white">
                  U
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Categories */}
        <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
          <Badge
            variant="secondary"
            className="bg-white text-black hover:bg-gray-200 whitespace-nowrap"
          >
            Все
          </Badge>
          <Badge
            variant="outline"
            className="border-[#303030] text-gray-300 hover:bg-[#303030] whitespace-nowrap"
          >
            Программирование
          </Badge>
          <Badge
            variant="outline"
            className="border-[#303030] text-gray-300 hover:bg-[#303030] whitespace-nowrap"
          >
            Игры
          </Badge>
          <Badge
            variant="outline"
            className="border-[#303030] text-gray-300 hover:bg-[#303030] whitespace-nowrap"
          >
            Обучение
          </Badge>
          <Badge
            variant="outline"
            className="border-[#303030] text-gray-300 hover:bg-[#303030] whitespace-nowrap"
          >
            Технологии
          </Badge>
          <Badge
            variant="outline"
            className="border-[#303030] text-gray-300 hover:bg-[#303030] whitespace-nowrap"
          >
            Музыка
          </Badge>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-[#1F1F1F] border-[#303030] overflow-hidden hover:bg-[#2A2A2A] transition-all duration-200 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex space-x-3">
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-red-600 text-white text-sm">
                      {video.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white line-clamp-2 group-hover:text-gray-200">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{video.author}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                      <span>{video.views} просмотров</span>
                      <span>•</span>
                      <span>{video.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
