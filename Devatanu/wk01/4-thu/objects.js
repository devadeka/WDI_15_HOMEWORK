Recipe = {
    name : "Mole",
    servings : 2,
    ingredients : [
        "cinnamon",
        "cumin",
        "cocoa"
    ]
};

function printRecipe(recipe){
    console.log(recipe.name);
    console.log("Serves: " + recipe.servings);
    console.log("ingredients:");
    for (var i = 0; i < recipe.ingredients.length; i++){
        console.log(recipe.ingredients[i]);
    }
}

printRecipe(Recipe);

class Book{
    constructor (author,title,haveRead){
        this.title = title;
        this.author = author;
        this.haveRead = haveRead;
    }
}

bookArray = [
    new Book('Asimov', 'Complete Robot', true),
    new Book('Asimov', 'iRobot', true),
    new Book('Asimov', 'Foundation', false),
    new Book('Tolkein', 'The Hobbit', false)
];

for(var i = 0; i < bookArray.length; i++){
    if (bookArray[i].haveRead){
        console.log('You have already read "' + bookArray[i].title + '" by ' + bookArray[i].author);
    }
    else{
        console.log('You have yet to read "' + bookArray[i].title + '" by ' + bookArray[i].author);
    }
}

class Movie{
    constructor(title,duration,stars){
        this.title = title;
        this.duration = duration;
        this.stars = stars;
        this.printInfo = function(){
            console.log(`"${this.title}" lasts for ${duration} minutes. Stars: ${stars.join()}.`);
        }
    }
}

var movie = new Movie("Puff the Magic Dragon", "30", ["A dragon","Magic smoke","Bad CGI"]);
console.log(movie.printInfo());