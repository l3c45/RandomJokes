const url="https://v2.jokeapi.dev/joke/Any?type=single&amount=10";
let jokes=[]
let index=0
let color
const bgColor=[
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
     "bg-info"
    ];
const randomColor=()=> Math.floor(Math.random()*6)

async function getJokes(url) {
    const res = await fetch(url)
    const data = await res.json()
    jokes=[...data.jokes]
    setData(jokes)
}

getJokes(url)


function setData(jokes){
    index!=0&&$(".bg").removeClass(color)
    color= bgColor[randomColor()]
    $(".title").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(".title").text(jokes[index].category);
      });
    $(".new").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(".new").text(jokes[index].joke);
      });
    $(".bg").addClass(color)
}

$(".other").on("click", function(){
    if (index < jokes.length-1){
        index++
        setData(jokes)
    }else {
        getJokes(url)
        index=0
    } 
});