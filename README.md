# Phone Select

API и Vue компонент для работы с телефонными номерами и кодами стран.

## Установка

```bash
npm install alexbednov-phone-select
```

## API

### Основные функции

```typescript
import {
  getCountries,
  getCountryByCode,
  getCountryByName,
  getCountryByPhoneCode,
  getFlagPath
} from 'alexbednov-phone-select'

// Получить список всех стран
const allCountries = getCountries('ru') // Поддерживает языки: ru, en, az, be

// Найти страну по коду
const country = getCountryByCode('ru') // Россия

// Найти страну по названию
const country = getCountryByName('Russia') // Россия

// Найти страну по телефонному коду
const country = getCountryByPhoneCode(7) // Россия

// Получить путь к флагу страны
const flagPath = getFlagPath('ru') // /src/assets/flags/ru.svg
```

### Типы

```typescript
interface Country {
  country_code: string
  phone_code: number
  name?: string
}

type Language = 'ru' | 'en' | 'az' | 'be'
```

### Локализация

```typescript
import { loadTranslations } from 'alexbednov-phone-select'

const translations = loadTranslations()
// Доступные переводы: ru, en, az, be
```

## Vue компонент

```vue
<script setup lang="ts">
import { PhoneSelect } from 'alexbednov-phone-select'
</script>

<template>
  <PhoneSelect
    v-model="phoneNumber"
    :lang="lang"
    :favorites-countries="['by', 'ru']"
  />
</template>
```

### Пропсы компонента

- `v-model` - полный номер телефона с кодом страны
- `lang` - язык интерфейса (ru, en, az, be)
- `favorites-countries` - массив кодов избранных стран

## Основано на

Список стран и флагов из репозитория [react-phone-country-code-flag](https://github.com/markliu2013/react-phone-country-code-flag/tree/main)
