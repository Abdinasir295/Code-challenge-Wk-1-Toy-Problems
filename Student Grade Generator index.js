
function studentGrade(mark) {
        if (mark > 79) {    
            return A
        }   
        else if (60<= mark <=79) {  
            return B
        }   
        else if (59<= mark <= 49){  
            return C
        }   
        else if (40 <= mark <=49) { 
            return D
        }   
        else {  
            return E
        }
    }
    function calculateGrade() {
        var mark = prompt("Enter your marks:");
        var grade = studentGrade(parseint(mark));
        alert("Your grade is: " + grade);
    }
    
    


