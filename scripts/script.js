let currentId = 2; 

let myLibrary = [
        {
            "id": 0,
            "title": "Hobbit",
            "author": "J R R Tolkien",
            "img": "https://storage.googleapis.com/lr-assets/kids/covers/_hires_imported/9780261103252.jpg",
        },
        {
            "id": 1,
            "title": "White Noise",
            "author": "Don Delilo",
            "img": "https://d3525k1ryd2155.cloudfront.net/h/187/168/283168187.0.l.jpg",
        },
        {
            "id": 2,
            "title": "The Witcher",
            "author": "Andrew Sapkowski",
            "img": "https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_TimeofContempt_HC-scaled.jpg",
        }
    ]

function Book(id, title, author, img) {
    this.id = id
    this.title = title
    this.author = author
    this.img = img
  }

Book.prototype.delete = function () {
    myLibrary.splice(Book.id, 1)
}
  
function addBookToLibrary() {

    const keys = Object.keys(myLibrary);

    keys.forEach((key, index) => {


        addSingleBook(key);

    })
}

addBookToLibrary();

function addSingleBook(key) {
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
    let readButton = document.createElement("button")
    let removeButton = document.createElement("button")

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
    readButton.textContent = "Toggle read"
    readButton.id = "readBtn" + tempId;
    removeButton.textContent = "Remove"
    removeButton.id = "removeBtn" + tempId;
    document.getElementById(readButton.id)

    let node = document.getElementById("cards");
    node.append(cardDiv);
    cardDiv.append(imageDiv);
    imageDiv.append(imgElement);
    cardDiv.append(detailsDiv);
    detailsDiv.append(centerDiv);
    centerDiv.append(titleH4);
    centerDiv.append(authorP);
    centerDiv.append(readButton)
    centerDiv.append(removeButton)

    document.getElementById(removeButton.id).addEventListener('click', () => {
        let buttonNumber = parseInt(removeButton.id.slice(-1));
        let indexNo = myLibrary.findIndex(function(book, index) {
            if(book.id == buttonNumber)
                return true;
        });
        myLibrary.splice(indexNo, 1);
        document.getElementById(buttonNumber).remove();
    })
    
}

// handle click of the add new book

document.getElementById("plus").addEventListener('click', ()=> {
    document.getElementById('new-form').style.display = "flex";
}
)

let submitButton = document.getElementById("submitBtn")
submitButton.addEventListener("click", function(event) {
    document.getElementById('new-form').style.display = "none";
    event.preventDefault();
    let tempId = Number(currentId + 1)
    let tempTitle = document.getElementById("author-form").value;
    let tempAuthor = document.getElementById("title-form").value;
    let tempImage = document.getElementById("image-form").value;
    myLibrary[tempId] = new Book(tempId, tempTitle, tempAuthor, tempImage);
    addSingleBook(tempId);
    currentId = currentId + 1;
    document.getElementById("author-form").value = "";
    document.getElementById("title-form").value = "";
    document.getElementById("image-form").value = "";
})
