INSERT INTO favorites
(user_id, event_name, event_url, event_image, event_start, event_min_price, event_max_price, venue_url, venue_image, venue_name)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;