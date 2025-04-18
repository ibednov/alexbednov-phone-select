# Phone Select

Vue 3 компонент для выбора телефонных номеров с международной поддержкой и маскированием.

## Скриншоты

<table>
  <tr>
    <td width="50%">
      <h3>Основной вид</h3>
      <img src="./docs/images/main.png" alt="Основной вид компонента" />
    </td>
    <td width="50%">
      <h3>Выбор страны</h3>
      <img src="./docs/images/select.png" alt="Выбор страны" />
    </td>
  </tr>
</table>

### Поддерживаемые языки

<table>
  <tr>
    <td width="25%">
      <h4>Русский</h4>
      <img src="./docs/images/lang-ru.png" alt="Русский язык" />
    </td>
    <td width="25%">
      <h4>English</h4>
      <img src="./docs/images/lang-en.png" alt="Английский язык" />
    </td>
    <td width="25%">
      <h4>Беларуская</h4>
      <img src="./docs/images/lang-be.png" alt="Белорусский язык" />
    </td>
    <td width="25%">
      <h4>Azərbaycan</h4>
      <img src="./docs/images/lang-az.png" alt="Азербайджанский язык" />
    </td>
  </tr>
</table>

### Функциональность

<table>
  <tr>
    <td width="50%">
      <h3>Поиск по названию страны</h3>
      <img src="./docs/images/search-by-name.png" alt="Поиск по названию страны" />
    </td>
    <td width="50%">
      <h3>Поиск по коду страны</h3>
      <img src="./docs/images/search-by-country-key.png" alt="Поиск по коду страны" />
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>Поиск по телефонному коду</h3>
      <img src="./docs/images/search-by-country-key-2.png" alt="Поиск по телефонному коду" />
    </td>
    <td width="50%">
      <h3>Избранные страны</h3>
      <img src="./docs/images/fav.png" alt="Избранные страны" />
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>Маскирование номера</h3>
      <img src="./docs/images/mask.png" alt="Маскирование номера" />
    </td>
    <td width="50%"></td>
  </tr>
</table>

## Установка

### NPM
```bash
npm install alexbednov-phone-select
```

### Bun
```bash
bun add alexbednov-phone-select
```

## API

### Основные функции

```typescript
import {
  getCountries,
  getCountryByCode,
  getCountryByName,
  getCountryByPhoneCode,
  getFlagPath,
  getAllCountryNames
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

// Получить все названия страны на разных языках
const names = getAllCountryNames('ru') // ['Россия', 'Russia', ...]
```

### Типы

```typescript
interface Country {
  country_code: string
  phone_code: number
  name?: string
  phone_ranges?: number[]
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
    :enable-mask="true"
    :enable-search="true"
    :hide-favorites="false"
    :disable-country-name-select="false"
    :disable-auto-parse-number="false"
    select-class="w-[180px]"
    input-class="flex-1"
    select-placeholder="Выберите страну"
    input-placeholder="Введите номер"
    select-content-class=""
    select-trigger-class=""
    select-value-class=""
    select-item-class=""
    select-item-country-class=""
  />
</template>
```

### Пропсы компонента

- `v-model` - полный номер телефона с кодом страны
- `lang` - язык интерфейса (ru, en, az, be)
- `favorites-countries` - массив кодов избранных стран
- `hide-favorites` - скрыть избранные страны (по умолчанию true)
- `enable-search` - включить поиск по странам (по умолчанию false)
- `enable-mask` - включить маскирование номера (по умолчанию false)
- `disable-country-name-select` - отключить отображение названия страны в селекте (по умолчанию false)
- `disable-auto-parse-number` - отключить автоматический парсинг номера (по умолчанию false)
- `select-class` - классы для селекта
- `input-class` - классы для инпута
- `select-placeholder` - плейсхолдер для селекта
- `input-placeholder` - плейсхолдер для инпута
- `select-content-class` - классы для контента селекта
- `select-trigger-class` - классы для триггера селекта
- `select-value-class` - классы для значения селекта
- `select-item-class` - классы для элемента селекта
- `select-item-country-class` - классы для элемента страны в селекте

### События

- `update:modelValue` - обновление номера телефона
- `update:country` - обновление выбранной страны

## Особенности

- Поддержка маскирования номеров
- Поиск по странам (код, название, телефонный код)
- Избранные страны
- Кастомизация через классы
- Автоматический парсинг номера
- Локализация (ru, en, az, be)
- Поддержка темной темы
- Адаптивный дизайн

## Основано на

Список стран и флагов из репозитория [react-phone-country-code-flag](https://github.com/markliu2013/react-phone-country-code-flag/tree/main)

## Лицензия

MIT
