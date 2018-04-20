UPDATE favorites
SET super_favorites = true
WHERE id = $1 AND user_id = $2