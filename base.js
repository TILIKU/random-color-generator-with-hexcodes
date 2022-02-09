let background = document.getElementsByTagName("body")[0];
let hexcodes = document.getElementsByTagName("p")[0];
let hexcodes1 = document.getElementsByTagName("p")[1];
let randomCode = "0123456789ABCDEF"
let hashtag = "#";

document.getElementById("btn").onclick = function(){randomize()};
function randomize()
{
    for(let i =0; i < 6; i++)
        hashtag += randomCode[Math.floor(Math.random() * 16)];
    hexcodes.innerHTML = hashtag;
    hexcodes1.innerHTML = hashtag;
    background.style.background = hashtag;
    hashtag = "#"; 
}



