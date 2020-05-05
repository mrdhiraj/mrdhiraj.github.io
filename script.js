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

    templates = {
        ...localStorage
    }
    for (template in templates) {
        //var t = document.getElementById("templates");
        //t.insertAdjacentHTML("afterend", "<button onClick = \"templateClicked('"+template+"')\">" +template+ "</button>");

        var t = document.createElement('div');
        t.innerHTML = template;
        t.setAttribute('class','template')
        t.addEventListener('click', templateClicked, true);

        document.getElementById("templates").appendChild(t);
    }
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
    var templatetxt = document.getElementById("templatetxt").value;
    var findtxt = document.getElementById("findtxt").value;

    var item = {
        templatename: templatename,
        templatetxt: templatetxt,
        findtxt: findtxt
    }

    var s = JSON.stringify(item)
    localStorage.setItem(templatename, s);
}


// var v=  localStorage.getItem("tt");
// var item = JSON.parse(v)

// var templatetxt = item.templatetxt
// var findtxt = item.findtxt

// document.getElementById("templatetxt").value = templatetxt
// document.getElementById("findtxt").value = findtxt     