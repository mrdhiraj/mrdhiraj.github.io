var btnReplace = document.getElementById("btnReplace");
var btncollonize = document.getElementById("btnCollon");

btnReplace.onclick = doReplace;
btncollonize.onclick = doCollonize;

function doCollonize() {
    var findtxt = document.getElementById("mainttxt").value;
    var lines = findtxt.split("\n");
    var outtxt = "";
for (i = 0; i < lines.length; i++) {
  var item = lines[i];
        if (item.length > 0) {
            if (i==lines.length-1){
            outtxt += "'" + item.trim() +"'" ;
            }
            else{
                outtxt += "'" + item.trim() + "',\n";
            }
        }
}

    document.getElementById("outtxt").value = outtxt;
}

function doReplace() {
    var findtxt = document.getElementById("findtxt").value;
    var delimitertxt = document.getElementById("delimitertxt").value;
    var maintext = document.getElementById("mainttxt").value;
    var templatetxt = document.getElementById("templatetxt").value;
    var outtxt = "";

    var findS = findtxt.split(delimitertxt);
    var lines = maintext.split("\n");
    var temp;
    var x;
    if (findS.length < 1) {
        return;
    }
    for (x in lines) {
        var item = lines[x];
        if (item.length > 0) {
            var lstitemS = item.trim().split(delimitertxt);
            temp = templatetxt;
            var loop = lstitemS.length;
            if (findS.length < loop) {
                loop = findS.length;
            }
            for (var i = 0; i < loop; i++) {
                if (findS[i].length < 1) {
                    continue;
                }
                var re = new RegExp(findS[i].trim(),'g');
                temp = temp.replace(re, lstitemS[i]);
            }
            outtxt += temp +  "\n";
        }
    }
    document.getElementById("outtxt").value = outtxt;
}