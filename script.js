var likes = 0
var likes2 = 0
var likes3 = 0

var countlikes = document.querySelector("#count")
var countlikes2 = document.querySelector("#count2")
var countlikes3 = document.querySelector("#count3")

console.log(countlikes);
console.log(countlikes2);
console.log(countlikes3);

function addlike() {
    likes ++;
    countlikes.innerText = likes +" Like(s)";
    console.log(likes);
}

function addlike2() {
    likes2 ++;
    countlikes2.innerText = likes2 +" Like(s)";
    console.log(likes2);
}

function addlike3() {
    likes3 ++;
    countlikes3.innerText = likes3 +" Like(s)";
    console.log(likes3);
}
