# Robot Cli

This project is based on the coding challenge link below.

## Available scripts

* Run the robot script using standard input form
> `npm start`

* Run the robot script using test data from `./data/test-data.js`
> `npm start --from-file`

* Run the unit tests via mocha and will execute all `*.spec.js` files in `./test` directory
> `npm test`

## Allowed commands to move the robot

* PLACE X,Y,F
* MOVE
* LEFT
* RIGHT
* REPORT

The X and Y should be replace with the numbers from 0 to 5, these will be the initial position of the robot in the table.
 
And F should be replace with either NORTH, EAST, SOUTH or WEST and this will be the facing direction of the robot.

# Example output:

```
npm start

> robot@1.0.0 start /home/prince/Documents/robot
> node index.js

PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

Output:
3,3,NORTH

-----------------

```
