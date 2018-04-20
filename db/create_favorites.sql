INSERT INTO favorites
(user_id, event_name, event_url, event_image, event_start, event_min_price, event_max_price, venue_url, venue_image, venue_name)
VALUES
(${user_id}, ${event_name}, ${event_url}, ${event_image}, ${event_start}, ${event_min_price}, ${event_max_price}, ${venue_url}, ${venue_image}, ${venue_name});