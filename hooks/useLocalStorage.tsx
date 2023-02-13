import React from 'react'

export const useLocalStorage = () => {
  return {
    localStorage: globalThis?.localStorage || global?.localStorage || null
  }
}
