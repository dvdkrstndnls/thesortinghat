-- Drops the quiz results for each user if it exists currently --
DROP DATABASE IF EXISTS quiz_db;
-- Creates the "quiz results for each submission" database --
CREATE DATABASE quiz_db;
CREATE Table users

(id INTEGER NOT NULL auto_increment,
 name VARCHAR(255) NOT NULL,
age INTEGER NOT NULL,
gender VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
photo VARCHAR(255),
team VARCHAR(255),
createdAt DATETIME NOT NULL,
updatedAt DATETIME NOT NULL, 
PRIMARY KEY(`id`)
);
