// declared a function with parameter 'mark'
function studentGrade(mark) {   
    // this ia an if condition 
        if (mark > 79) {    
            return 'A'
        }   
        // else if condition if the first condition failed
        else if (60<= mark <=79) {  
            return 'B'
        }   
        else if (59<= mark <= 49){  
            return 'C'
        }   
        else if (40 <= mark <=49) { 
            return 'D'
        }       
        //otherwise if all the above conditions failed
        else {  
            return 'E'
        }
    }   
    // input your marks here to know your grade
    console.log(studentGrade());

    
    


