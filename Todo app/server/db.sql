create database perntodo;
\c perntodo
CREATE table if not exists todo(todoID serial primary key, todoDescription text);