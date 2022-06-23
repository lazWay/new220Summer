function myFunction() {
    var text=document.getElementById("numbers").value; //Takes in a list of comma-separated numbers from the user
    var arr=text.split(","); //Takes in a list of comma-separated numbers from the user
    var sum=0;
    var avg=0;
    for(i=0;i<arr.length;i++){
          sum += parseInt(arr[i]); //Splits that list into an array of numbers
    }
    avg=sum/arr.length; //Calculates the average of the array
    document.getElementById("sum").innerHTML = "Sum: "+sum; //  Displays to the user : SUM
    document.getElementById("avg").innerHTML = "Average: "+avg; // Displays to the user :AVG
    var text=document.getElementById("numbers").value=""; //Removes the text from the input so the user can type in new numbers
  }