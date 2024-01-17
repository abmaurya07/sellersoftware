import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yvpfsajfzpmlukhzsqfz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cGZzYWpmenBtbHVraHpzcWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MjQyMDMsImV4cCI6MjAyMTAwMDIwM30.M0dpzupp7sfBFMB_5WWsg4a8a4VK9k1phn4n-GGWRrg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})