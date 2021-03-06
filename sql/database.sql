/* Tables creation */
CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    priority INTEGER NOT NULL,
    description TEXT,
    delivery_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    status BOOLEAN, 
    project_id INTEGER REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

/* Project data insertion */
INSERT INTO projects(name, priority, description, delivery_date)
VALUES('Make a web app', 1, 'Using TypeScript', '2021-01-30');

INSERT INTO projects(name, priority, description, delivery_date)
VALUES('Make an app', 1, 'Using Flutter', '2021-01-29');

INSERT INTO projects(name, priority, description, delivery_date)
VALUES('Make a desktop app', 1, 'Using Golang', '2021-01-28');

/* Task data insertion */
INSERT INTO tasks(name, status, project_id)
VALUES('Download Typescript', false, 1);

INSERT INTO tasks(name, status, project_id)
VALUES('Config Flutter', false, 2);

INSERT INTO tasks(name, status, project_id)
VALUES('Learn Golang', false, 3);