## Плагин для jQuery: Textlimiter.
Выводит сообщение о превышении символьного лимита в текстовом поле.

### Инициализация:
```javascript
$('textarea, input').textlimiter();
```

### Привязка области для вывода ошибки к текстовому полю
Осуществляется по id с префиксом: "txl_" + id.
```html
<textarea id="text"></textarea>
<div class="txl_text"></div>
```

### Возможные опции и их значения по умолчанию
```javascript
$('textarea, input').textlimiter({
    text: 'Максимум символов: {max}. Превышено на {over}.',   // Текстовая маска для печати ошибки
    max: 140,                                                 // Максимальное количество символов
    class: '',                                                // css-классы для текстового поля с превышением
    style: {},                                                // css-стили для текстового поля с превышением
    formSend: false                                           // При превышении отправка формы выключена
});
```

### Пример опций
```javascript
$('textarea, input').textlimiter({
    text: 'Можно ввести {max} символов. У тебя уже на {over} больше!',
    max: 10,
    class: 'class1 class2',
    style: {
        'background-color': '#CCCCCC',
        'color': 'red'
    },
    formSend: true
});
```