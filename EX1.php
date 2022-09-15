<!DOCTYPE html>  
<html>  
<body>  

<h1>Q1: Write a program that will count the "r" characters in a string
</h1>
<?php  
$sentence = "Beauty lies  in the eyes of beholderr";  
$wordCount = 0;  
   
for($i = 0; $i < strlen($sentence)-1; $i++) {  
    //Counts all the spaces present in the string  
    //It doesn't include the first space as it won't be considered as a word  
    if($sentence[$i] == 'r') {  
        $wordCount++;  
    }  
}  
//To count the last word present in the string, increment wordCount by 1  
$wordCount++;  
   
//Displays the total number of words present in the given string  
print("Total number of 'r' in the given string: " . $wordCount);  
?> 

<!-- anthor answer  -->


<h1>Write a PHP function that checks whether a string is all lowercase
</h1>

<?php
function is_str_lowercase($str1)
   {
    for ($sc = 0; $sc < strlen($str1); $sc++) {
	      if (ord($str1[$sc]) >= ord('A') &&
          ord($str1[$sc]) <= ord('Z')) {
      return false;
         }
         }
      return true;
       }
var_dump(is_str_lowercase('nOot'));
?>

<!-- https://theasciicode.com.ar/ -->
<!-- see this link to learn more about soudo code -->


<!-- another answer  -->
<br>
<?php
$string = "string";

if (ctype_lower($string)) {
    echo $string . ' is all lowercase letters.';
} else {
    echo $string . ' is not all lowercase letters.';
}


?>
<br>

<?php






?>
<!-- <?php
// $flag=0;
// function islowercase($str1)
//    {
//     for ($sc = 0; $sc < strlen($str1); $sc++) {
// 	      if (ord($str1[$sc]) >= 94 &&
//           ord($str1[$sc]) <= 122) {
//          $flag=1;
//         }
        
       
//        else {
//        $flag=0;
//        }
//     }
// }

// if($flag==0){echo"All latter is small later"};
// else {echo"we have a capital latter "   };
    

// islowercase('YASO'));


?> -->







</body>  
</html>  