DROP TABLE IF EXISTS tasks;

CREATE TABLE IF NOT EXISTS tasks (
  id int(11) NOT NULL,
  task varchar(200) NOT NULL,
  status tinyint(1) NOT NULL DEFAULT 1,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE tasks ADD PRIMARY KEY (id);
ALTER TABLE tasks MODIFY id int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO tasks (id, task, status, created_at) VALUES
(1, 'Find bugs', 1, '2016-04-10 23:50:40'),
(2, 'Review code', 1, '2016-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50');

CREATE TABLE IF NOT EXISTS friends (
  id int(11) NOT NULL,
  name varchar(200) NOT NULL,
  contactNo varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE friends ADD PRIMARY KEY (id);
ALTER TABLE friends MODIFY id int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO friends (id, contactNo, email, created_at) VALUES
(1, 'Alexandra Mathew', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(2, 'Alex Chia', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(3, 'Sivakumar', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(4, 'Lim Beng', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(5, 'Ahmad Binte Alliyah', '97734343', 'a@a.com', '2016-04-10 23:50:50');