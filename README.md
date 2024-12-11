# "3.Обработка событий"

**Важно**: в рамках этого проекта используется менеджер пакетов yarn

---

### Игра с гоблинами

![CI](https://github.com/BudTon/js_pro_web_event_handler/actions/workflows/web.yml/badge.svg)

[GitHub Pages](https://budton.github.io/js_pro_web_event_handler/)


![](./pic/GracefulMiniatureBustard-small.gif)

#### Легенда

Вы решили доделать игру с гоблинами, поэтому нужно реализовать оставшуюся логику.

#### Описание

Нужно доделать игру с гоблинами, реализовав следующую логику:
1. Гоблин появляется в рандомной точке (набор точек фиксирован) ровно на 1 секунду
1. Если пользователь успел за это время кликнуть на этой точке (попробуйте сделать custom-курсор в виде молотка), то:
    * пользователю засчитывается +1 балл
    * гоблин пропадает из ячейки
1. Если пользователь пропустил 5 появлений гоблинов, то игра завершается.

Попробуйте реализовать всё не в виде единого скрипта, а разбив приложение на классы, каждый из которых ответственен за опредённую логику.

Всё собирается через Webpack (включая картинки и стили) и выкладывается на Github Pages через CI.

---
