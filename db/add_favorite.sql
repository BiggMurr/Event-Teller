SELECT * FROM favorites
WHERE user_id=$1
ALTER TABLE favorites
ALTER COLUMN super_favorites 'false';
