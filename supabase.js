import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Replace with your actual Supabase URL and Anon Key
export const supabaseUrl = 'https://vrjzxlcjpbwheosycrmg.supabase.co'
export const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyanp4bGNqcGJ3aGVvc3ljcm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNDc3MTUsImV4cCI6MjA4NjgyMzcxNX0.2pekNrEY8K16Tpu_sihuon5P-VpP5FdOTQXgeoManT0'

// Use sessionStorage so that each browser tab has its own independent session.
// This prevents conflicts when testing different user roles in separate tabs.
// With localStorage (the default), all tabs on the same origin share one session —
// logging in as admin in tab 2 would overwrite the student session in tab 1.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: window.sessionStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
