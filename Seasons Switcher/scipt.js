let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage = "/seasons-switcher-four-seasons-xs-img.png";
let springMediumImage = "/seasons-switcher-four-seasons-md-img.png";
let summerSmallImage = "/seasons-switcher-summer-xs-img.png";
let summerMediumImage = "/seasons-switcher-summer-md-img.png";
let autumnSmallImage = "/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage = "/seasons-switcher-autumn-md-img.png";
let winterSmallImage = "/seasons-switcher-winter-xs-img.png";
let winterMediumImage = "/seasons-switcher-winter-xs-img.png";

function changeSeasonToSpring(){
    seasonSmallImageElement.src = springSmallImage;
    seasonMediumImageElement.src = springMediumImage;
}
function changeSeasonToSummer(){
    seasonSmallImageElement.src = summerSmallImage;
    seasonMediumImageElement.src = summerMediumImage;
}
function changeSeasonToAutumn(){
    seasonSmallImageElement.src = autumnSmallImage;
    seasonMediumImageElement.src = autumnMediumImage;
}
function changeSeasonToWinter(){
    seasonSmallImageElement.src = winterSmallImage;
    seasonMediumImageElement.src = winterMediumImage;
}