CREATE TABLE IF NOT EXISTS serene.public.user (
    name VARCHAR(50),
    email VARCHAR(50),
    password_hash CHAR(128) NOT NULL,
    salt CHAR(32) NOT NULL,
    creation_date DATE,
    last_login TIMESTAMP,
    PRIMARY KEY (email)
);

INSERT INTO serene.public.user VALUES ('David Tang', 'a@gmail.com', 'asd', 'asd', NOW(), NOW());
