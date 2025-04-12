import countriesData from './countries_sorted.json'
import fs from 'fs'

const filteredCountries = countriesData.map((country) => {
  // оставить только country_code и phone_code
  return {
    country_code: country.country_code,
    phone_code: country.phone_code,
  }

})

fs.writeFileSync('countries_filtered.json', JSON.stringify(filteredCountries, null, 2))
