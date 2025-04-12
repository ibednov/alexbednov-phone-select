# Phone Select

Vue компонент для выбора телефонного номера с поддержкой кодов 239 стран.

## Установка

```bash
npm install phone-select
```

## Использование

```vue
<script setup lang="ts">
import { PhoneSelect } from 'phone-select'
</script>

<template>
  <PhoneSelect v-model="phoneNumber" />
</template>
```

## API

### Компонент

- `v-model` - полный номер телефона с кодом страны

### Утилиты

```typescript
import { getCountries, getCountryByCode, getCountryByName } from 'phone-select'

// Получить список всех стран
const allCountries = getCountries()

// Найти страну по коду
const country = getCountryByCode('7') // Россия

// Найти страну по названию
const country = getCountryByName('Russia') // Россия
```

## Типы

```typescript
interface Country {
  name: string
  code: string
  flag: string
}
```

## Локализация

Локализация осуществляется через файлы `ru.json` и `en.json` в папке `src/lang`.

## Основано на

Список стран и флагов из репозитория [react-phone-country-code-flag](https://github.com/markliu2013/react-phone-country-code-flag/tree/main)
