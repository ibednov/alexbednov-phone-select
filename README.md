# Phone Select

Vue компонент для выбора телефонного номера с поддержкой кодов стран.

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
import { countries, getCountryByCode, getCountryByName } from 'phone-select'

// Получить список всех стран
const allCountries = countries

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
