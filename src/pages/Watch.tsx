import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Watch = () => {
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const currentVideo = {
    id: 1,
    title: "Создание React приложения с нуля",
    author: "DevChannel",
    subscribers: "1.2M",
    views: "1.2M",
    time: "2 дня назад",
    likes: "45K",
    description:
      "В этом видео мы создаем React приложение с нуля, используя современные инструменты и подходы. Вы узнаете как настроить проект, работать с компонентами и управлять состоянием.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };

  const suggestedVideos = [
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
  ];

  const comments = [
    {
      id: 1,
      author: "CodeMaster",
      text: "Отличное видео! Очень подробно все объяснено",
      time: "2 дня назад",
      likes: 12,
    },
    {
      id: 2,
      author: "WebDeveloper",
      text: "Спасибо за туториал, помог разобраться с React!",
      time: "1 день назад",
      likes: 8,
    },
    {
      id: 3,
      author: "Student123",
      text: "Можно больше примеров с хуками?",
      time: "5 часов назад",
      likes: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Header */}
      <header className="bg-[#1F1F1F] border-b border-[#303030] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white"
                onClick={() => window.history.back()}
              >
                <Icon name="ArrowLeft" className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Icon name="Play" className="w-8 h-8 text-red-600" />
                <span className="text-2xl font-bold">YouTube 2.0</span>
              </div>
            </div>

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden mb-4 aspect-video">
              <iframe
                src={currentVideo.videoUrl}
                title={currentVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-white">
                {currentVideo.title}
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{currentVideo.views} просмотров</span>
                  <span>•</span>
                  <span>{currentVideo.time}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center space-x-2 ${liked ? "text-red-500" : "text-gray-400"}`}
                    onClick={() => setLiked(!liked)}
                  >
                    <Icon name="ThumbsUp" className="w-4 h-4" />
                    <span>{currentVideo.likes}</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white"
                  >
                    <Icon name="ThumbsDown" className="w-4 h-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white"
                  >
                    <Icon name="Share" className="w-4 h-4" />
                    <span>Поделиться</span>
                  </Button>
                </div>
              </div>

              <Separator className="bg-[#303030]" />

              {/* Channel Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-red-600 text-white">
                      {currentVideo.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-white">
                      {currentVideo.author}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {currentVideo.subscribers} подписчиков
                    </p>
                  </div>
                </div>

                <Button
                  className={`px-6 ${subscribed ? "bg-[#303030] text-white" : "bg-red-600 hover:bg-red-700"}`}
                  onClick={() => setSubscribed(!subscribed)}
                >
                  {subscribed ? "Подписан" : "Подписаться"}
                </Button>
              </div>

              {/* Description */}
              <div className="bg-[#1F1F1F] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{currentVideo.views} просмотров</span>
                    <span>{currentVideo.time}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDescription(!showDescription)}
                  >
                    <Icon
                      name={showDescription ? "ChevronUp" : "ChevronDown"}
                      className="w-4 h-4"
                    />
                  </Button>
                </div>

                <p
                  className={`text-gray-300 ${showDescription ? "" : "line-clamp-2"}`}
                >
                  {currentVideo.description}
                </p>
              </div>

              {/* Comments */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-medium">Комментарии</h3>
                  <Badge
                    variant="secondary"
                    className="bg-[#303030] text-gray-300"
                  >
                    {comments.length}
                  </Badge>
                </div>

                {/* Add Comment */}
                <div className="flex space-x-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-red-600 text-white">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <Textarea
                      placeholder="Добавьте комментарий..."
                      className="bg-transparent border-b border-[#303030] resize-none"
                      rows={2}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        Отмена
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Комментировать
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder-avatar.jpg" />
                        <AvatarFallback className="bg-red-600 text-white">
                          {comment.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="font-medium text-white">
                            {comment.author}
                          </span>
                          <span className="text-gray-400">{comment.time}</span>
                        </div>
                        <p className="text-gray-300 mt-1">{comment.text}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white"
                          >
                            <Icon name="ThumbsUp" className="w-3 h-3 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white"
                          >
                            <Icon name="ThumbsDown" className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white text-xs"
                          >
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Рекомендуемые</h3>
            <div className="space-y-4">
              {suggestedVideos.map((video) => (
                <Card
                  key={video.id}
                  className="bg-[#1F1F1F] border-[#303030] overflow-hidden hover:bg-[#2A2A2A] transition-all duration-200 cursor-pointer"
                >
                  <div className="flex space-x-3 p-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-32 h-20 object-cover rounded"
                      />
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm line-clamp-2 mb-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-400 mb-1">
                        {video.author}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>{video.time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Watch;
