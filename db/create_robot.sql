INSERT INTO robots
(robot_name, 
robot_class,
)
VALUES($1, $2)

returning *