function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    //need to get data from json file
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && xhr.status===200){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
loadjson("dynamic.json",function(text){
    var d = JSON.parse(text);
    console.log(d);
})