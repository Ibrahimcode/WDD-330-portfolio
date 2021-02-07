
hikesList = [
    {
        name = "Mountain View",
        imagePath = "./falls.jpg",
        imageAlt = "Image of fall",
        distance = "3",
        difficulty = "Easy",
        desciption = "You will love it",
        direction = "Take the next curve",
    },
    {
        name = "Mountain View",
        imagePath = "./falls.jpg",
        imageAlt = "Image of fall",
        distance = "3",
        difficulty = "Easy",
        desciption = "You will love it",
        direction = "Take the next curve",
    },
    {
        name = "Mountain View",
        imagePath = "./falls.jpg",
        imageAlt = "Image of fall",
        distance = "3",
        difficulty = "Easy",
        desciption = "You will love it",
        direction = "Take the next curve",
    },
]

export default class Hikes {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.backButton = this.buildBackButton();
    }

    getHikelist() {
        return hikesList;
    }

    getHikesByName(hikeName) {
        let hike = this.getHikelist;
        hike.forEach(element => {
            return element.name;
        });
    }

    
}
