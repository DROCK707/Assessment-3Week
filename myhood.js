let lehiRestaurants =[
    {
        name: "Little India",
        city: "American Fork",
        cuisine: "Indian",
        rating: "4.9"
    },
    {
        name: "Spitz",
        city: "Lehi",
        cuisine: "Mediterranean",
        rating: "4.3"
    },
    {
        name: "Aubergine Kitchen",
        city: "Lehi",
        cuisine: "Salad",
        rating: ""
    },
    {
        name: "J.Dawgs",
        city: "Lehi",
        cuisine: "Hotdog",
        rating: "4.5"
    }
    
]


function randomFoodGen () {
    const random = Math.floor(Math.random()*lehiRestaurants.length)
    let print = lehiRestaurants[random]
    console.log(print)
}




let buttonFood = document.querySelector("#recommend");



buttonFood.addEventListener("click",randomFoodGen)

