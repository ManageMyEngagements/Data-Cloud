function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5srW1ZXLki2":
        Script1();
        break;
      case "5aUsgZUjMEW":
        Script2();
        break;
      case "5o32NHh2lDU":
        Script3();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencildatacloud){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-data-cloud-init?authtool=sl&v=1638635165&chart=NjAwfDEzMTB8YmQ1NGU5MWQxOWNlOGQ4OTJlNDc3NzYyY2I1YWQ3NTM";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var t=this.responseText,e=document.getElementsByTagName("head")[0],a=document.createElement("script");e.appendChild(a),a.appendChild(document.createTextNode(t)),window.stencildatacloud=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}

}

function Script2()
{
  if(void 0===window.stencildatacloud){var player=GetPlayer(),targlink="https://cluelabs.com/stencil/display/widget-data-cloud-init?authtool=sl&v=1638635165&chart=NjAwfDEzMTB8YmQ1NGU5MWQxOWNlOGQ4OTJlNDc3NzYyY2I1YWQ3NTM";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){var t=this.responseText,e=document.getElementsByTagName("head")[0],a=document.createElement("script");e.appendChild(a),a.appendChild(document.createTextNode(t)),window.stencildatacloud=!0}},xhttp.open("GET",targlink,!0),xhttp.send()}

}

function Script3()
{
  var player = GetPlayer();
var valor = player.GetVar("TextEntry");
CloudSet('nombre', valor);



}

