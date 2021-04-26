CREATE TABLE robots (
    id serial primary key,
    robot_name varchar(255) ,
    robot_class varchar(255) ,
    color_1 varchar(10) ,
    color_2 varchar(10) ,
    color_3 varchar(10) ,
    img varchar(255),
    strength int ,
    intellect int ,
    defense int ,
    magic_defense int ,
    agility int ,
    focus int 
)