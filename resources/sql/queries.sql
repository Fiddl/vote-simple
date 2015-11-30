-- name: save-vote!
-- creates a new user record
INSERT INTO users
(id, uuid, vote, timestamp)
VALUES (:id, :uuid, :vote, :timestamp)

-- name: update-user!
-- update an existing user record
UPDATE users
SET uuid = :uuid, vote = :vote
WHERE id = :id

-- name: get-user
-- retrieve a user given the id.
SELECT * FROM users
WHERE id = :id

-- name: delete-user!
-- delete a user given the id
DELETE FROM users
WHERE id = :id

-- name: get-votes
-- retrieves all available votes
SELECT * from users

-- name: get-ballot
-- retrieves ballot
SELECT * FROM ballot

-- name: set-ballot!
-- updates or sets the ballot
UPDATE ballot
SET candidates = :candidates, title = :title