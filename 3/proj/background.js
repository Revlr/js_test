function getJSON(url) {
    var resp ;
    var xmlHttp ;

    resp  = '' ;
    xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }

    return resp ;
}

var json = getJSON("https://picsum.photos/id/"+Math.floor((Math.random()*100))+"/info");

var parsedJson = JSON.parse(json);
var w = parsedJson.width;
var h = parsedJson.height;
var id = parsedJson.id;
var url = "https://picsum.photos/id/"+id+"/"+w+"/"+h;

const bodyBackground = document.querySelector("body");
bodyBackground.style = "background:url("+url+") no-repeat center/cover;";
