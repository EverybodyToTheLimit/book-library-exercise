let currentId = 3; 

let myLibrary = [
        {
            "id": 2,
            "title": "Hobbit",
            "author": "J R R Tolkien",
            "img": "https://storage.googleapis.com/lr-assets/kids/covers/_hires_imported/9780261103252.jpg",
        },
        {
            "id": 3,
            "title": "White Noise",
            "author": "Don Delilo",
            "img": "https://d3525k1ryd2155.cloudfront.net/h/187/168/283168187.0.l.jpg",
        },
        {
            "id": 4,
            "title": "The Witcher",
            "author": "Andrew Sapkowski",
            "img": "https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_TimeofContempt_HC-scaled.jpg",
        }
    ]

function Book(title, author, img) {
    this.title = title
    this.author = author
    this.img = img
  }
  
function addBookToLibrary() {

    const keys = Object.keys(myLibrary);

    keys.forEach((key, index) => {


        let tempId = myLibrary[key].id;
        let tempTitle = myLibrary[key].title;
        let tempAuthor = myLibrary[key].author;
        let tempImg = myLibrary[key].img;

        let cardDiv = document.createElement("div"); 
        imageDiv = document.createElement("div");
        detailsDiv = document.createElement("div"); 
        centerDiv = document.createElement("div");
        let imgElement = document.createElement("img");
        let titleH4 = document.createElement("H4");
        let authorP = document.createElement("p");

        cardDiv.className = "card";
        cardDiv.id = tempId;
        imageDiv.className = "image"
        imgElement.src = tempImg;
        detailsDiv.className = "details"
        centerDiv.className = "center"
        titleH4.className = "title"
        titleH4.textContent = tempTitle
        authorP.className = "author"
        authorP.textContent = tempAuthor;

        let node = document.getElementById("cards");
        node.append(cardDiv);
        cardDiv.append(imageDiv);
        imageDiv.append(imgElement);
        cardDiv.append(detailsDiv);
        detailsDiv.append(centerDiv);
        centerDiv.append(titleH4);
        centerDiv.append(authorP);

    })
}