import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://vzhqxavdhymihoaybbpm.supabase.co/rest/v1/posts?select=id',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aHF4YXZkaHltaWhvYXliYnBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjUwNjY0NSwiZXhwIjoyMDAyMDgyNjQ1fQ.KnVz20VETstkMJ0aUbPfexpDbTzwnDjf61L6ITN_idg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aHF4YXZkaHltaWhvYXliYnBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjUwNjY0NSwiZXhwIjoyMDAyMDgyNjQ1fQ.KnVz20VETstkMJ0aUbPfexpDbTzwnDjf61L6ITN_idg"
    }
})