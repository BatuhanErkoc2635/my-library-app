const addButton = document.querySelector(".addButton")
const tableMain = document.querySelector(".mainTable")


books = [];



function Book (title, author, page){
    this.title = title
    this.author = author
    this.page = page
}

function addNewBook(){
    nameInput = document.getElementById("bname").value;
    authorInput = document.getElementById("aname").value;
    pageInput = document.getElementById("pcount").value;
    let newBook = new Book (nameInput,authorInput,pageInput)
    books.push(newBook)
    addTableEntry(newBook.title,newBook.author,newBook.page)
}

function addTableEntry(name,author,page){
    let newTableRow = document.createElement("tr")
    let newTableBook = document.createElement("td")
    let newTableAuthor = document.createElement("td")
    let newTablePage = document.createElement("td")
    let readCheck = document.createElement("td")
    let readCheckButton = document.createElement("input")
    let deleteCheck = document.createElement("td")
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "DELETE"
    readCheckButton.setAttribute("type","checkbox")
    newTableBook.textContent = name
    newTableAuthor.textContent = author
    newTablePage.textContent = page
    newTableRow.appendChild(newTableBook)
    newTableRow.appendChild(newTableAuthor)
    newTableRow.appendChild(newTablePage)
    readCheck.appendChild(readCheckButton)
    newTableRow.appendChild(readCheck)
    deleteCheck.appendChild(deleteButton)
    newTableRow.appendChild(deleteCheck)
    deleteButton.addEventListener("click",() => {
        newTableRow.remove()
        
    })
    tableMain.appendChild(newTableRow)
}



addButton.addEventListener("click",() => {
    addNewBook()
    
    console.log(books)
    
})










