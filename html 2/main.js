/*

console.log("its just finish")

console.log( document.getElementById("titre"))



var getClass=document.getElementsByClassName("Tracks")
var para = document.getElementsByClassName("myPara")

    var getId = document.getElementById("myPara").innerHTML
    getId="this is the modification"
alert(getId)

var feedback=document.getElementById(#"feedback").innerHTML

*/
var geText= document.getElementById("ta");
function makeBold(){

    if(geText.style.fontWeight=="bold")
    {
    geText.style.fontWeight="normal"}
    else {
    geText.style.fontWeight="bold"}
    }
function makeitalic(){
    
    if(geText.style.fontStyle=="italic")
    {geText.style.fontStyle="normal"}
    else(geText.style.fontStyle="italic")
}
function makeunderline(){
    if(geText.style.textDecoration=="underline")
    {
        geText.style.textDecoration="none"
    }
else{geText.style.textDecoration="underline"} 

}
function handleSize(){
    geText.style.fontSize= document.getElementById("size").value 
}
function handletext(){
    geText.style.fontFamily=document.getElementById("text").value


}

