-- CREATE TABLE restaurant (
--     id SERIAL PRIMARY KEY,
--     name varchar(30),
--     distance integer,
--     stars integer,
--     category varchar(30),
--     favorite varchar(30),
--     takeout boolean,
--     last_date date
-- );

-- INSERT INTO restaurant VALUES
-- (DEFAULT, 'Olive Garden', 5, 4.5, 'Italian', 'pasta', TRUE, '2021-10-04'),
-- (DEFAULT, 'Torchy', 8, 4.7, 'Tex-Mex', 'burrito', TRUE, '2021-10-04'),
-- (DEFAULT, 'Slurp', 4, 4.5, 'Ramen', 'brisket ramen', TRUE, '2022-07-04'),
-- (DEFAULT, 'The Union Kitchen', 1, 4, 'American', 'Beignets', TRUE, '2022-05-04'),
-- (DEFAULT, 'Crust Pizza Co', 1, 5, 'Pizza', 'BBQ Chicken Pizza', TRUE, '2022-01-04'),
-- (DEFAULT, 'Island Fin Poke Company', 1, 3, 'Poke', 'Vegetable Poke', TRUE, '2021-11-14'),
-- (DEFAULT, 'Ginger Thai', 4, 4, 'Asian', 'Pad THai', TRUE, '2022-04-14');

SELECT name FROM restaurant WHERE stars = 5;

-- ALTER TABLE restaurant
-- ALTER COLUMN stars TYPE decimal(2,1);

-- Queries

SELECT favorite FROM restaurant WHERE stars = 5;

SELECT id FROM restaurant WHERE name = 'Slurp';

SELECT * FROM restaurant WHERE category = 'BBQ';

SELECT * FROM restaurant WHERE takeout = TRUE;

SELECT * FROM restaurant WHERE (takeout = TRUE) AND (category = 'BBQ'); 

SELECT * FROM restaurant WHERE distance <= 2;

SELECT * FROM restaurant WHERE last_date > '2023-05-01';

SELECT * FROM restaurant WHERE (last_date > '2023-05-01') AND (stars = 5);

-- Aggregation and Sorting Queries

SELECT * FROM restaurant ORDER BY distance;

SELECT * FROM restaurant ORDER BY distance DESC LIMIT 2;

SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

SELECT * FROM restaurant WHERE distance <= 2 ORDER BY stars DESC LIMIT 2;

SELECT COUNT(*) FROM restaurant;

SELECT COUNT(name) FROM restaurant; -- not sure if this is what it was asking?

SELECT AVG(stars) FROM restaurant;

SELECT MAX(stars) FROM restaurant;