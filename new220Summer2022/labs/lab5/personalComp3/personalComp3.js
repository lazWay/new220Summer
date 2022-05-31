let drippingMatter = document.getElementById("drippingMatter");

drippingMatter.style.width = "100px";
drippingMatter.style.height = "100px";

function dripDrop(){
    drippingMatter.style.backgroundColor = "#300005";
    drippingMatter.style.paddingBottom = "20px"
    drippingMatter.style.columnSpan = "10"
}
function dripMatter(){
 drippingMatter.style.height = "200px";
 drippingMatter.style.borderBottomRightRadius = "50px"
 drippingMatter.style.borderBottomLeftRadius = "50px"
}
