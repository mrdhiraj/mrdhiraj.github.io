var btnReplace = document.getElementById("btnReplace");
var btncollonize = document.getElementById("btnCollon");

btnReplace.onclick = doReplace;
btncollonize.onclick = doCollonize;
btncopy.onclick = copyOutput;
btnSaveTemplate.onclick = saveTemplate;

function copyOutput() {
    copy_to_clipboard('outtxt')
}

renderTemplates()
function renderTemplates() {
     document.getElementById("templates").innerHTML=''

    templates = {
        ...localStorage
    }

    //need to sort before renderTemplates
    var json_data = templates
    var result = [];

for(var i in json_data){
    result.push([i, json_data [i]]);
}

people2 = sortJSON(result, 'time');

   // for (template in people2)
for (let i = 0; i < people2.length; i++) 
     {

        //var t = document.getElementById("templates");
        //t.insertAdjacentHTML("afterend", "<button onClick = \"templateClicked('"+template+"')\">" +template+ "</button>");

        var t = document.createElement('span');
        t.innerHTML = people2[i][0];
        t.setAttribute('class','template')
        t.addEventListener('click', templateClicked, true);

        document.getElementById("templates").appendChild(t);
    }
}

function sortJSON(data, key) {
    return data.sort(function (a, b) {
        av = JSON.parse(a[1])
        bv=JSON.parse(b[1])

        var x = bv.time;
        var y = av.time;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


function templateClicked(tname) {
    templatename = tname.srcElement.innerText

    templates = {
        ...localStorage
    }
    template = templates[templatename]
    if (template) {
        t = JSON.parse(template)
        document.getElementById("templatetxt").value = t.templatetxt
        document.getElementById("findtxt").value = t.findtxt
    }
}

function saveTemplate() {
    templatename = prompt('Give a name...')
    if(templatename){
    var templatetxt = document.getElementById("templatetxt").value;
    var findtxt = document.getElementById("findtxt").value;

    var item = {
        time: new Date().getTime(),
        templatetxt: templatetxt,
        findtxt: findtxt
    }
    localStorage.setItem(templatename, JSON.stringify(item));
    }
    renderTemplates()
}


function someDefaultTemplates()
{
    var item = {
        templatetxt: "SELECT * FROM <TABLE> ;",
        findtxt: "<TABLE>",
        type:"default",
        time: new Date().getTime()
    }
    localStorage.setItem('SELECT', JSON.stringify(item));

        var item = {
        templatetxt: "<>,",
        findtxt: "<>",
        type:"default",
        time: new Date().getTime()
    }
    localStorage.setItem('Numeric Collonize', JSON.stringify(item));

}
someDefaultTemplates()