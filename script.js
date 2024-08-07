const addButton = document.querySelector(".buttonSection")
const booksSection = document.querySelector(".books-section")
const closeButton = document.querySelector(".closeButton   ")
const modal = document.querySelector("#modal")








function addNewBookArea(name,author,page){
    let bookArea = document.createElement("div")
    let bookTitle = document.createElement("h2")
    let bookAuthor = document.createElement("h2")
    let bookPage = document.createElement("h2")


    let checkBoxArea = document.createElement("div")
    checkBoxArea.setAttribute("class","checkbox")
    let checkBoxText = document.createElement("h4")
    checkBoxText.textContent = "Read Status"
    let checkBoxInput = document.createElement("input")
    checkBoxInput.setAttribute("type","checkbox")
    
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "DELETE"

    checkBoxArea.appendChild(checkBoxText)
    checkBoxArea.appendChild(checkBoxInput)


    bookTitle.textContent = name;
    bookAuthor.textContent = author;
    bookPage.textContent = page;

    bookArea.setAttribute("class","book")
    bookArea.appendChild(bookTitle)
    bookArea.appendChild(bookAuthor)
    bookArea.appendChild(bookPage)
    bookArea.appendChild(checkBoxArea)
    bookArea.appendChild(deleteButton)
    booksSection.appendChild(bookArea)
    
    deleteButton.addEventListener("click", () => {
        bookArea.remove();
    })

}





addButton.addEventListener("click",() => {
    modal.showModal();
}
)
closeButton.addEventListener("click",() => {
    let bookTitleInput = document.querySelector("#title")
    let authorTitleInput = document.querySelector("#author")
    let pcountTitleInput = document.querySelector("#page-count")
    addNewBookArea(bookTitleInput.value,authorTitleInput.value,pcountTitleInput.value)
    modal.close();
    
}
)


