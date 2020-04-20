var btnComments = document.getElementById("btnComments");
var btnTables = document.getElementById("btnTables");

btnComments.onclick = getComments;
btnTables.onclick = getTables;
btnDistinct.onclick =getDistincts;

function getDistincts() {
    var intxt = document.getElementById("mainttxt").value.toUpperCase();
    var outtxt = ''; 
    var myStringArray = intxt.split("\n");
    if (myStringArray) {
        myStringArray=removeDuplicates(myStringArray);
        var arrayLength = myStringArray.length;
        myStringArray = myStringArray.sort()
        for (var i = 0; i < arrayLength; i++) {
            outtxt =  outtxt + '\n' + myStringArray[i] ;
        }
    }
    document.getElementById("outtxt").value = outtxt.trim() ;
}

function getComments() {
    var intxt = document.getElementById("mainttxt").value;
    var outtxt = ''; //document.getElementById("outtxt").value;

    var regx = /--.*/gm;

    var myStringArray = intxt.match(regx);
    if(myStringArray)
    {
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
        outtxt = outtxt + '\n' + myStringArray[i]
    }
    document.getElementById("outtxt").value = outtxt;
    }
}



function getTables() {
    var intxt = document.getElementById("mainttxt").value.toUpperCase();
    var outtxt = '';

    //var regx= /from (\S+)|join (\S+)/gmi;
    
    //from
    var regx = /from[ ]+(\S+)/gmi;
    var myStringArray = intxt.match(regx);
    if (myStringArray) {
        //myStringArray = myStringArray.unique();
        myStringArray=removeDuplicates(myStringArray);
        var arrayLength = myStringArray.length;

        for (var i = 0; i < arrayLength; i++) {
            outtxt = outtxt + '\n SELECT * ' + myStringArray[i] + ';';
        }
    }


    //join
    var regx = /join[ ]+(\S+)/gmi;
    var myStringArray = intxt.match(regx);
    if (myStringArray) {
        myStringArray = myStringArray.unique();
        var arrayLength = myStringArray.length;

        for (var i = 0; i < arrayLength; i++) {
            outtxt = outtxt + '\n SELECT * ' + myStringArray[i].replace(/join/gi, 'from') + ';';
        }
    }

 	//Destinations
 	var destitxt ='';
     
    //into
    var regx = /into[ ]+(\S+)/gmi;
    var myStringArray = intxt.match(regx);
    if (myStringArray) {
        myStringArray = myStringArray.unique();
        var arrayLength = myStringArray.length;

        for (var i = 0; i < arrayLength; i++) {
            destitxt = destitxt + '\n select * ' + myStringArray[i].replace(/into/gi, 'from') + ';';
        }
    }
    
    document.getElementById("outtxt").value = outtxt + '\n \n'+ destitxt;
};