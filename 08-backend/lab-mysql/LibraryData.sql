USE brainstation_library;

--
-- Dumping data for table `books`
--
DROP TABLE IF EXISTS `books`;



--
-- Dumping data for table `books`
--
DROP TABLE IF EXISTS `authors`;



--
-- Table structure for table `authors`
--
CREATE TABLE `authors` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(256) DEFAULT NULL,
  `last_name` varchar(256) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`author_id`)
);




--
-- Insert data into table `authors`
--
INSERT INTO `authors` VALUES (1,'George','Martin','grrmartin@example.com'),(2,'Leslie', 'McFarlane','l.mcfarlane@example.com');




--
-- Table structure for table `books`
--
CREATE TABLE `books` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(256) DEFAULT NULL,
  `published` date DEFAULT NULL,
  `num_pages` int DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`)
);



--
-- Insert data into table `books`
--
INSERT INTO `books` (title, published, num_pages, author_id) VALUES ('A Game of Thrones','2003-1-1',400,1),
('A Clash of Kings','2005-1-1',500,1),
('A Storm of Swords','2007-1-1',600,1),
('A Feast for Crows','2009-1-1',700,1),
('A Dance with Dragons','2010-1-1',800,1),
('The House on the Cliff', '1997-1-1', 300,2),
('The Secret of the Old Mill', '1998-1-1', 400,2),
('The Missing Chums', '1999-1-1', 300,2),
('Hunting for Hidden Gold', '2000-1-1', 400,2),
('The Shore Road Mystery', '2003-1-1', 300,2),
('The Secret of the Caves', '2005-1-1', 400,2),
('The Mystery of Cabin Island', '2007-1-1', 300,2);




