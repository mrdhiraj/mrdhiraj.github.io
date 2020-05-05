var btnReplace = document.getElementById("btnReplace");
var btncollonize = document.getElementById("btnCollon");

btnReplace.onclick = doReplace;
btncollonize.onclick = doCollonize;
btncopy.onclick =copyOutput;
btnSaveTemplate.onclick = saveTemplate;

function saveTemplate()
{
    var templatetxt = document.getElementById("templatetxt").value;    
    localStorage.setItem("tt",templatetxt);
}

function copyOutput()
{
    copy_to_clipboard('outtxt')
}

document.getElementById("templatetxt").value = localStorage.getItem("tt");
