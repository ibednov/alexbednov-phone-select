import { Country } from '../utils/countries'

import fs from 'fs'
import countriesData from './countries.json'

const sortCountries = (countries: Country[]): Country[] => {
  return [...countries].sort((a, b) => a.country_code.localeCompare(b.country_code))
}

// write sortedCountries to countries_sorted.json
fs.writeFileSync('countries_sorted.json', JSON.stringify(sortCountries(countriesData), null, 2))
