import { ref } from 'vue'

export const usePhoneMask = () => {
  const maskedPhone = ref('')

  return {
    maskedPhone
  }
}
