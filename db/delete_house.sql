DELETE FROM houses
-- WHERE ID is equal to the 1st passed in argument
WHERE id = $1