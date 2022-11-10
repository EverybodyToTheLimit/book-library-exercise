let currentId = 3; 

let myLibrary = [
        {
            "id": 2,
            "title": "Hobbit",
            "author": "J J R Tolkien",
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
    for (const key in myLibrary) {
        let tempTitle = this.title
        let tempAuthor = this.temp_author
        let tempImg = this.img

        let node = document.getElementById("cards")
    }
  }