'use strict';

const RobotController = require('./src/controller/robot-contoller');
const TestDataInput = require('./data/test-data');
const process = require('process');
const standardInput = process.stdin;

if (typeof process.env['npm_config_from_file'] !== 'undefined') {
    TestDataInput.forEach((commandList) => {
        commandList.forEach((command) => {
            console.log(command);
            RobotController.runCommand(command);
        });
    });

    process.exit();
}

console.log(`Robot commands:
    PLACE {X},{Y},{F} 
    MOVE  = move forward
    LEFT  = rotate to left
    RIGHT = rotate to right

X and Y are position and values can be 0 to 4
F is facing and values can be NORTH, EAST, SOUTH, WEST

The (0,0) position is the SOUTH, WEST corner

Start with PLACE {X},{Y},{F} command to put the robot on the table
`);

standardInput.setEncoding('utf-8');
standardInput.on('data', (data) => {
    RobotController.runCommand(data.trim());
});
