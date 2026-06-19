import axios from 'axios'
import * as SecureStorage from 'expo-secure-store'

const BACKEND_API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://localhost:8000'

export const api = axios.create({
      baseURL: BACKEND_API_URL,
      headers: {
            'Content-Type': 'application/json'
      }
})

api.interceptors.request.use(
      async (config) => {
            const token = await SecureStorage.getItemAsync("async_token");
            if(token) {
                  config.headers.Authorization = `Bearer ${token}`
            }
            return config;
      },
      (error) => Promise.reject(error)
);