CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL,
    mail VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE type_practice (
    type_practice_id SERIAL PRIMARY KEY,
    type_practice_name VARCHAR(50) NOT NULL
);

CREATE TABLE type_tutorial (
    type_tutorial_id SERIAL PRIMARY KEY,
    type_tutorial_name VARCHAR(50) NOT NULL
);

CREATE TABLE level (
    level_id SERIAL PRIMARY KEY,
    level_name VARCHAR(50) NOT NULL
);

CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);

CREATE TABLE tutorial (
    tuto_id SERIAL PRIMARY KEY,
    tuto_title VARCHAR(100) NOT NULL,
    explains TEXT,
    photo_url VARCHAR(255),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES users(user_id),
    type_practice_id  INTEGER REFERENCES type_practice(type_practice_id ),
    type_tutorial_id INTEGER REFERENCES type_tutorial(type_tutorial_id),
    level_id INTEGER REFERENCES level(level_id),
    category_id INTEGER REFERENCES category(category_id)
);

CREATE TABLE favorites (
    favorite_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE favorites_tutorial (
    favorites_id INTEGER REFERENCES favorites(favorites_id),
    tuto_id INTEGER REFERENCES tutorial(tuto_id),
    PRIMARY KEY(favorites_id, tuto_id)
);