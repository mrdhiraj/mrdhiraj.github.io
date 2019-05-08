
var btnComments = document.getElementById("btnComments");
var btnTables = document.getElementById("btnTables");



btnComments.onclick = getComments;
btnTables.onclick = getTables;

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
        //Do something
    }

    document.getElementById("outtxt").value = outtxt;
    }

    //localStorage.setItem("lastname", "Smith!!!!!!!!!!!!!!!!");
    // Retrieve
    //document.getElementById("outtxt").value = localStorage.getItem("lastname");
}

Array.prototype.unique = function() {
    return this.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    
       
    });
}


function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}



function getTables() {
    var intxt = document.getElementById("mainttxt").value.toUpperCase();
    var outtxt = ''; //document.getElementById("outtxt").value;

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
            //Do something
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
            //Do something
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
            //Do something
        }
    }

    document.getElementById("outtxt").value = outtxt + '\n \n'+ destitxt;
  //  document.getElementById("destitxt").value = ;


   
}

//addTwoNumbers();
;