CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, 
    display_name TEXT,
    auth_id TEXT,
    img TEXT
)