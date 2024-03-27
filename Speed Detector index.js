//declare a function and put  speed as it parameter 
function speedDetector(speed) {     
    // If speed is less than 70, return 'OK'
    if (speed < 70) {
        return 'OK';
    }   
    //this is where if the first condition is not met this will be the next condition and so on 
    // If speed is between 70 and 75 (inclusive), return 'point 1'
    else if (speed <= 75) {
        return 'point 1';
    }   
    // If speed is between 75 and 80 (inclusive), return 'points 2'
    else if (speed <= 80) {
        return 'points 2';
    }   
    // If speed is between 80 and 85  return 'points 3'
    else if (speed <= 85) {
        return 'points 3';
    } 
    // If speed is between 85 and 90  return 'points 4'
    else if (speed <= 90) {
        return 'points 4';
    } 
    // If speed is between 90 and 95  return 'points 5'
    else if (speed <= 95) {
        return 'points 5';
    } 
    // If speed is between 95 and 100  return 'points 6'
    else if (speed <= 100) {
        return 'points 6';
    } 
    // If speed is between 100 and 105  return 'points 7'
    else if (speed <= 105) {
        return 'points 7';
    }   
    // If speed is between 105 and 110  return 'points 8'
    else if (speed <= 110) {
        return 'points 8';
    }   
    // If speed is between 110 and 115  return 'points 9'
    else if (speed <= 115) {
        return 'points 9';
    } 
    // If speed is between 115 and 120  return 'points 10'
    else if (speed <= 120) {
        return 'points 10';
    } 
    // If speed is between 120 and 125  return 'points 11'
    else if (speed <= 125) {
        return 'points 11';
    } 
    // If speed is between 125 and 130 return 'points 12'
    else if (speed <= 130) {
        return 'points 12';
    }     
    // If none of the above conditions are met, return 'License suspended'
    else {
        return 'License suspended';
    } 
}   
//this where the drivers speed will be read and given the points
// Test cases
console.log(speedDetector());//output
