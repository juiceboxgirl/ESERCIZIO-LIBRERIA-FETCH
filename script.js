// Function to fetch books and populate the page
async function fetchBooks() {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/books");
    const books = await response.json();
    const bookListElement = document.getElementById("bookList");

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6 mb-4 book-col";

      const card = document.createElement("div");
      card.className = "card";

      const image = document.createElement("img");
      image.src = book.img;
      image.className = "card-img-top";
      image.style.width = "200px"; // Set the width of the image

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = book.title;

      const price = document.createElement("p");
      price.className = "card-text";
      price.textContent = `Price: $${book.price}`;

      const discardButton = document.createElement("button");
      discardButton.className = "btn btn-danger";
      discardButton.textContent = "Scarta";
      discardButton.addEventListener("click", () => {
        bookListElement.removeChild(col);
      });

      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(discardButton);

      card.appendChild(image);
      card.appendChild(cardBody);

      col.appendChild(card);

      bookListElement.appendChild(col);
    });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

// Fetch and populate books on page load
fetchBooks();
