# ObJeCtPrAcTice / by. markoricci

Для работы создайте и используйте ветку develop, это нужно для того, чтобы избежать ошибки при обновлении этого репозитория преподавателем. Если этого не сделать, будет -1 балл :)
Перед началом работы ознакомьтесь с мэйкфайлом и заданиями.
Все задания выполняются в index.js и экспортируются не по дефолту.

#### Prettier

Обратите внимание, что в проекте добавился файл .prettierrc. Он отвечает за конфигурацию форматировщика, который будет подгонять ваш код под правила линтера. Чтобы он работал, вам следует добавить расширение prettier во вкладке extensions. Форматировщик стоит применять так же, как и сохранение файла, чтобы избежать потом траты времени на осознание изменений :) Чтобы узнать команду, которая запускает нашего помошника на файле, нажмите ctrl + shift + p, у вас откроется набор команд и строка с поиском, вот в ней и введите Format и узнайте сочетание нужное сочетание клавиш, если вдруг оно покажется вам неудобным, переопределите шорткаты.

### Задание №1

Напишите функцию `isEmpty()`, которая поверхностно проверяет объект на пустоту. Пустыми значениями считаются: '', null, NaN, undefined. **Oblect.keys** в помощь.

**Пример использования**

    ```javascript
    isEmpty({a: true, b: false}); // false
    isEmpty({a: undefined, b: false}); // false
    isEmpty({a: undefined}); // true
    isEmpty({}); // true
    ```

### Задание №2

Напишите функцию `without()`, которая возвращает новый объект без указанных значений.. Воспользуйтесь **forEach** и деструктуризацией объекта.

**Пример использования**

    ```javascript
    without({ a: 1, b: 2, c: 3 }, 'b', 'c'); // { a: 1 }
    without({ a: 1, b: 2, c: 3 }, 'a'); // { b: 2, c: 3 }
    ```

### Задание №3

Напишите функцию `isEmptyDeep()`, которая делает глубокую проверку на пустоту объекта. Пустыми значениями считаются: '', null, NaN, undefined. Воспользуйтесь **Oblect.keys**, оператором **typeof** и **for of** циклом.

**Пример использования**

    ```javascript
    isEmptyDeep({}); // true
    isEmptyDeep({ a: { b: undefined } }); // true
    isEmptyDeep({ a: { b: undefined, c: undefined, d: { e: undefined, f: 1, g: undefined }}}) // false
    ```

### Задание №4

Напишите функцию `intersection()`, которая поверхностно находит пересечения объектов и возвращает объект пересечений. Воспользуйтесь встроенной в язык функцией **reduce** у массивов, обратите внимание, что работа с аккумулятором в этот раз будет отличаться от прошлой практики по массивам, вам потребуется узнать, каким образом нужно записывать новую связку ключ-значение в него. А ещё не забывайте про деструктуризацию. Документацию вы найдёте [тут](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

**Пример использования**

    ```javascript
    intersection({ a: 1, b: 2 }, { c: 1, b: 2 }); // { b: 2 }
    intersection({ a: 1, b: 2, c: 1 }, { c: 1, b: 2 }); // { c: 1, b: 2 }
    ```

### Задание №5

Напишите функцию `intersectionDeep()`, которая глубоко находит пересечения объектов и возвращает объект пересечений. Воспользуйтесь оператором **typeof**, а также рекурсивным вызовом вашей функции.

**Пример использования**

    ```javascript
    intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }); // { b: { c: 3 } }
    intersectionDeep({ a: 1, b: { c: 3, d: { e: 5 } } }, { c: 1, b: { c: 3, d: { e: 5 } } }); // { b: { c: 3 }, d: { e: 5 } }
    ```
