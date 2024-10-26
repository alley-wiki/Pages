import React, { useState, useEffect } from 'react';
import { Cherry, FileText, Search, Users, Moon, Sun } from 'lucide-react';
import '../styles/WikiPage.css';

export default function WikiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`wiki-page ${isDarkMode ? 'dark-theme' : ''}`}>
      <nav className="top-nav">
        <div className="nav-left">
          <a href="/" className="logo">
            <Cherry size={24} className="cherry-icon" />
            <span>Вишневые Аллеи</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="/Pages/" className="nav-link">
            <FileText size={20} />
            <span>Все Статьи Вики</span>
          </a>
          <a href="/category/" className="nav-link">
            <Search size={20} />
            <span>Категории</span>
          </a>
          <a href="/sozdateli/" className="nav-link">
            <Users size={20} />
            <span>Создатели/Редакторы</span>
          </a>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <header className="header">
            <img src="/images/bannerwiki.png" alt="Вишневые Аллеи Вики" />
            <h1>Все Статьи Вики</h1>
          </header>

          <div className="divider"></div>

          <div className="content">
            <h2>Статьи по категориям</h2>
            <ul className="articles-list">
              <li>
                <h3>Основное</h3>
                <ul>
                  <li><a href="/Wiki/">Главная страница</a></li>
                  <li><a href="/server/">О сервере</a></li>
                  <li><a href="/rules/">Правила сервера</a></li>
                </ul>
              </li>
              <li>
                <h3>Участники сервера</h3>
                <ul>
                  <li><a href="/Cherru/">Черр</a></li>
                  <li><a href="/Dunkan/">Дункан</a></li>
                  <li><a href="/Fred/">Фред</a></li>
                  <li><a href="/Kreygen/">Крейген</a></li>
                  <li><a href="/lyikon/">Луикон</a></li>
                  <li><a href="/Raznoschik/">Разносчик</a></li>
                  <li><a href="/Rocker/">Рокер</a></li>
                  <li><a href="/sai/">Сай</a></li>
                  <li><a href="/Sonya/">Соня</a></li>
                  <li><a href="/tarelca/">Тарелка</a></li>
                  <li><a href="/Tok/">Ток</a></li>
                  <li><a href="/waff/">Вафф</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}