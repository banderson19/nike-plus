CREATE TABLE comments (
    comment_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    comment VARCHAR(30),
    user_id INT,
    trail_id INT
);

CREATE TABLE trailheads (
    trail_id INTEGER AUTO_INTCREMENT PRIMARY KEY, 
    trail_name VARCHAR(45), 
    latitude DECIMAL, 
    longitute DECIMAL, 
    dog_friendly BOOLEAN
)

CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(45),
    password VARCHAR(45),
    first_name VARCHAR(45),
     
)