//var name=prompt('What is your name?');
//alert("Hi " + name);

function addTwoNumbers() {
   	var a = 5;
	var b = 11;
	var result = a + b;
	alert(result);
}
var btn= document.getElementById("btn");
var btncollonize = document.getElementById("btnCollon");

btn.onclick= doAction;
btncollonize.onclick = doCollonize;


function doCollonize()
{
var findtxt= document.getElementById("mainttxt").value;
 var lines = findtxt.split("\n");
var outtxt= "";

for (x in lines)
            {
				var item =lines[x];
                if (item.length>0 )
                {
                   
                    outtxt += "'" + item.trim() + "',\n"  ;
                }
            }



 document.getElementById("outtxt").value = outtxt;
}


function doAction() {
	var findtxt= document.getElementById("findtxt").value;
	var delimitertxt=document.getElementById("delimitertxt").value;
	var replacetxt= document.getElementById("replacetxt").value;
	var maintxt= document.getElementById("mainttxt").value;
	var outtxt= "";

	var findS = findtxt.split(delimitertxt);
    var lines = replacetxt.split("\n");
	var temp;
	var x;
	if (findS.length < 1)
            {
                return;
            }
            for (x in lines)
            {
				var item =lines[x];
                if (item.length > 0)
                {
                    var lstitemS = item.trim().split(delimitertxt);
                    temp = maintxt;
                    var loop = lstitemS.length;
                    if (findS.length < loop)
                    {
                        loop = findS.length;
                    }
                    for (var i = 0; i < loop; i++)
                    {
                        if (findS[i].length < 1)
                        {
                            continue;
                        }
                        var re = new RegExp(findS[i].trim(), 'g');
                        temp = temp.replace(re, lstitemS[i]);
                    }
                    outtxt += temp + "\n" + "\n";
                }
            }

    document.getElementById("outtxt").value = outtxt;
	
	
	//localStorage.setItem("lastname", "Smith!!!!!!!!!!!!!!!!");
// Retrieve
//document.getElementById("outtxt").value = localStorage.getItem("lastname");
}

//addTwoNumbers();
