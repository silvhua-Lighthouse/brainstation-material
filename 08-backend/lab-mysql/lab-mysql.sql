CREATE DATABASE brainstation_library;
USE brainstation_library;
CREATE TABLE books (
  book_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(256), 
  published DATE,
  num_pages INT,
  author_id INT,
  PRIMARY KEY (book_id)
);
DESCRIBE books;

CREATE TABLE authors (
  author_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(256),
  last_name VARCHAR(256),
  email VARCHAR(256),
  PRIMARY KEY (author_id)
);
DESCRIBE authors;

ALTER TABLE books
ADD FOREIGN KEY (author_id)
REFERENCES authors(author_id);

INSERT INTO authors (first_name, last_name, email)
VALUES ('George', 'Martin', 'grrmartin@example.com');

SELECT * FROM authors;

INSERT INTO books (title, published, num_pages, author_id) 
VALUES ('A Feast for Crows', DATE '2005-10-17', 753, 1);
SELECT * FROM books;

DROP TABLE books;
DROP DATABASE brainstation_library;