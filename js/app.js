displaySection = document.getElementById("displaySection");
hidingSection = document.getElementById("hidingSection");
crossMark = document.getElementById("crossMark");
insertDiv = document.getElementById("insertDiv");

crossMark.addEventListener("click", function () {
    displaySection.style.display = "none";
    hidingSection.style.display = "block";
})

function displayFunction(id) {
    displaySection.style.display = "block";
    hidingSection.style.display = "none";
    id = id.replace("mainButton-","");
    switch (Number(id)) {
        case 1:
            listBook();
            break;
        case 2:
            issueBook();
            break;
        case 3:
            returnBook();
            break;
        case 4:
            addBook();
            break;
        case 5:
            deleteBook();
            break;
        default:
            console.log("Not Compared")
    }
}


function addBook() {
    html = `<div class="mb-3">
    <input type="text" class="form-control form-outline-danger" id="exampleFormControlInput1" placeholder="Title of Book">
</div>
<div class="mb-3">
    <input type="text" class="form-control form-outline-danger" id="exampleFormControlInput1" placeholder="Author of Book">
</div>

<div class="mb-3">
    <input type="text" class="form-control form-outline-danger" id="exampleFormControlInput1" placeholder="No. of Copies">
</div>

<div class="mb-3">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description about book"></textarea>
</div>
<div class="mb-3">
    <button id="1"  type="button" class="btn btn-warning operatingButton addBookButton" ">Add book</button>
</div>`;
    insertDiv.innerHTML = html;

    crossMark = document.getElementById("crossMark");
    crossMark.className = "btn btn-outline-warning operatingButton";

    addBookButton = document.querySelector(".addBookButton");
    addBookButton.addEventListener("click", function () {
        let booksList = localStorage.getItem("booksList");
        if (booksList == undefined || booksList == null || booksList == "[]") {
            booksObjArray = [];
        }
        else {
            booksObjArray = JSON.parse(booksList);
        }
        let titleOfBook = insertDiv.children[0].children[0];
        let authorOfBook = insertDiv.children[1].children[0];
        let numberOfCopy = insertDiv.children[2].children[0];
        let descriptionOfBook = insertDiv.children[3].children[0];
        let temp = [titleOfBook.value, authorOfBook.value,Number(numberOfCopy.value), descriptionOfBook.value];
        booksObjArray.push(temp);
        localStorage.setItem("booksList", JSON.stringify(booksObjArray));
        titleOfBook.value = "";
        authorOfBook.value = "";
        numberOfCopy.value = "";
        descriptionOfBook.value = "";
    });
}

function listBook() {
    html = `
        <h5 class="card-title">List Of Books</h5>
                <p class="card-text">
                <span id='2s' class="badge rounded-pill bg-light text-dark btn " onclick="buttonToggle(this.id)">Title</span>
                <span id='1s' class="badge rounded-pill bg-dark btn " onclick="buttonToggle(this.id)">Author</span>
                </p>
                <div id="nextSiblingAdder" class="mb-3">
                    <input id="searchBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Search By Title">
                </div>
                <div id="addNewText">
    
                </div>
        `;

    insertDiv.innerHTML = html;

    crossMark = document.getElementById("crossMark");
    crossMark.className = "btn btn-outline-primary operatingButton";

    html = `<div class="row">`
    let booksList = localStorage.getItem("booksList");
    if (booksList == undefined || booksList == null || booksList == "[]") {
        booksObjArray = [];
    }
    else {
        booksObjArray = JSON.parse(booksList);
    }
    if (booksObjArray.length == 0) {
        html += `No Books To Display! Use "Add Book" section to add books to your library`;
    }
    else {
        booksObjArray.forEach((element,index) => {
            title = element[0];
            author = element[1];
            copies = element[2];
            description = element[3];
            html += `<div id="${index}" class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <p class="h5 card-title">${title}</p>
                                <p class="card-text"><small class="text-muted">-by ${author}</small></p>
                                <p class="card-text">${description}.</p>
                                <p class="card-text notification" title="No. of copies">
                                <span class="badge bg-primary">${copies}</span>
                                </p>
                            </div>
                        </div>
                    </div>`
        });
    }

    html += `</div>`;
    addNewText = document.getElementById("addNewText");
    addNewText.innerHTML = html;

    searchBookInput = document.getElementById("searchBookInput");
    mainString = searchBookInput.placeholder;
    searchBookInput.addEventListener("input", function () {
        value = searchBookInput.value;
        Array.from(addNewText.children[0].children, function (element) {
            if (mainString.includes("Title")) {
                if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";

                }
            }
            else {
                if (element.children[0].children[0].children[1].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {

                    element.style.display = "none";
                }
            }

        });
    });
    // addNewText.replaceWith();
}

function issueBook() {
    html = `
        <h5 class="card-title">Issue Of Books</h5>
                <p class="card-text">
                <span id='2s' class="badge rounded-pill bg-light text-dark btn " onclick="buttonToggle(this.id)">Title</span>
                <span id='1s' class="badge rounded-pill bg-dark btn " onclick="buttonToggle(this.id)">Author</span>
                </p>
                <div id="nextSiblingAdder" class="mb-3">
                    <input id="searchBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Search By Title">
                </div>
                <div id="addNewText">
    
                </div>
        `;

    insertDiv.innerHTML = html;

    crossMark = document.getElementById("crossMark");
    crossMark.className = "btn btn-outline-secondary operatingButton";

    html = `<div class="row">`
    let booksList = localStorage.getItem("booksList");
    if (booksList == undefined || booksList == null || booksList == "[]") {
        booksObjArray = [];
    }
    else {
        booksObjArray = JSON.parse(booksList);
    }
    if (booksObjArray.length == 0) {
        html += `No Books To Display! Use "Add Book" section to add books to your library`;
    }
    else {
        booksObjArray.forEach((element,index) => {
            title = element[0];
            author = element[1];
            copies = element[2];
            description = element[3];
            html += `<div id="${index}" class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <p class="h5 card-title">${title}</p>
                                <p class="card-text"><small class="text-muted">-by ${author}</small></p>
                                <p class="card-text">${description}.</p>
                                <p class="card-text notification" title="No. of copies">
                                    <span class="badge bg-secondary">${copies}</span>
                                </p>
                                <button id="issue-button-${index}" type="button" class="btn btn-outline-secondary operatingButton" onclick="subButtonClicked(this.id)">Issue Book</button>
                            </div>
                        </div>
                    </div>`
        });
    }

    html += `</div>`;
    addNewText = document.getElementById("addNewText");
    addNewText.innerHTML = html;

    searchBookInput = document.getElementById("searchBookInput");
    mainString = searchBookInput.placeholder;
    searchBookInput.addEventListener("input", function () {
        value = searchBookInput.value;
        Array.from(addNewText.children[0].children, function (element) {
            if (mainString.includes("Title")) {
                if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";

                }
            }
            else {
                if (element.children[0].children[0].children[1].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {

                    element.style.display = "none";
                }
            }

        });
    });
    // addNewText.replaceWith();
}

function returnBook() {
    html = `
        <h5 class="card-title">Return Of Books</h5>
                <p class="card-text">
                <span id='2s' class="badge rounded-pill bg-light text-dark btn " onclick="buttonToggle(this.id)">Title</span>
                <span id='1s' class="badge rounded-pill bg-dark btn " onclick="buttonToggle(this.id)">Author</span>
                </p>
                <div id="nextSiblingAdder" class="mb-3">
                    <input id="searchBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Search By Title">
                </div>
                <div id="addNewText">
    
                </div>
        `;

    insertDiv.innerHTML = html;

    crossMark = document.getElementById("crossMark");
    crossMark.className = "btn btn-outline-success operatingButton";

    html = `<div class="row">`
    let booksList = localStorage.getItem("booksList");
    if (booksList == undefined || booksList == null || booksList == "[]") {
        booksObjArray = [];
    }
    else {
        booksObjArray = JSON.parse(booksList);
    }
    if (booksObjArray.length == 0) {
        html += `No Books To Display! Use "Add Book" section to add books to your library`;
    }
    else {
        booksObjArray.forEach((element,index) => {
            title = element[0];
            author = element[1];
            copies = element[2];
            description = element[3];
            html += `<div id="${index}" class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <p class="h5 card-title">${title}</p>
                                <p class="card-text"><small class="text-muted">-by ${author}</small></p>
                                <p class="card-text">${description}.</p>
                                <p class="card-text notification" title="No. of copies">
                                <span class="badge bg-success">${copies}</span>
                                </p>
                                <button id="return-button-${index}" type="button" class="btn btn-outline-success operatingButton" onclick="subButtonClicked(this.id)">Return Book</button>
                            </div>
                        </div>
                    </div>`
        });
    }

    html += `</div>`;
    addNewText = document.getElementById("addNewText");
    addNewText.innerHTML = html;

    searchBookInput = document.getElementById("searchBookInput");
    mainString = searchBookInput.placeholder;
    searchBookInput.addEventListener("input", function () {
        value = searchBookInput.value;
        Array.from(addNewText.children[0].children, function (element) {
            if (mainString.includes("Title")) {
                if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";

                }
            }
            else {
                if (element.children[0].children[0].children[1].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {

                    element.style.display = "none";
                }
            }

        });
    });
    // addNewText.replaceWith();
}

function buttonToggle(id) {
    s1 = document.getElementById("1s");
    s2 = document.getElementById("2s");
    ToggleText = document.querySelector(".ToggleText");
    id = Number(id[0]);
    if (id == 2) {
        s1.className = "badge rounded-pill bg-dark btn btn-dark";
        s2.className = "badge rounded-pill bg-light text-dark btn btn-dark";
        ToggleText.placeholder = "Search By Title";

    }
    if (id == 1) {
        s1.className = "badge rounded-pill bg-light text-dark btn btn-dark";
        s2.className = "badge rounded-pill bg-dark btn btn-dark";
        ToggleText.placeholder = "Search By Author";

    }
    searchBookInput = document.getElementById("searchBookInput");
    mainString = searchBookInput.placeholder;
    searchBookInput.addEventListener("input", function () {
        value = searchBookInput.value;
        Array.from(addNewText.children[0].children, function (element) {
            if (mainString.includes("Title")) {
                if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";

                }
            }
            else {
                if (element.children[0].children[0].children[1].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {

                    element.style.display = "none";
                }
            }

        });
    });
}

function deleteBook() {
    html = `
        <h5 class="card-title">Delete Of Books</h5>
                <p class="card-text">
                <span id='2s' class="badge rounded-pill bg-light text-dark btn " onclick="buttonToggle(this.id)">Title</span>
                <span id='1s' class="badge rounded-pill bg-dark btn " onclick="buttonToggle(this.id)">Author</span>
                </p>
                <div id="nextSiblingAdder" class="mb-3">
                    <input id="searchBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Search By Title">
                </div>
                <div id="addNewText">
    
                </div>
        `;

    insertDiv.innerHTML = html;

    crossMark = document.getElementById("crossMark");
    crossMark.className = "btn btn-outline-danger operatingButton";

    html = `<div class="row">`
    let booksList = localStorage.getItem("booksList");
    if (booksList == undefined || booksList == null || booksList == "[]") {
        booksObjArray = [];
    }
    else {
        booksObjArray = JSON.parse(booksList);
    }
    if (booksObjArray.length == 0) {
        html += `No Books To Display! Use "Add Book" section to add books to your library`;
    }
    else {
        booksObjArray.forEach((element,index) => {
            title = element[0];
            author = element[1];
            copies = element[2];
            description = element[3];
            html += `<div id="${index}" class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <p class="h5 card-title">${title}</p>
                                <p class="card-text"><small class="text-muted">-by ${author}</small></p>
                                <p class="card-text">${description}.</p>
                                <p class="card-text notification" title="No. of copies">
                                <span class="badge bg-danger">${copies}</span>
                                </p>
                                <button id="delete-button-${index}" type="button" class="btn btn-outline-danger operatingButton" onclick="subButtonClicked(this.id)">Delete Book</button>
                            </div>
                        </div>
                    </div>`
        });
    }

    html += `</div>`;
    addNewText = document.getElementById("addNewText");
    addNewText.innerHTML = html;

    searchBookInput = document.getElementById("searchBookInput");
    mainString = searchBookInput.placeholder;
    searchBookInput.addEventListener("input", function () {
        value = searchBookInput.value;
        Array.from(addNewText.children[0].children, function (element) {
            if (mainString.includes("Title")) {
                if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {
                    element.style.display = "none";

                }
            }
            else {
                if (element.children[0].children[0].children[1].innerText.toLowerCase().includes(value.toLowerCase())) {
                    element.style.display = "block";
                }
                else {

                    element.style.display = "none";
                }
            }

        });
    });
    // addNewText.replaceWith();
}

function subButtonClicked(id){
    listOfId = id.split('-');
    switch(listOfId[0]){
        case 'issue':
            console.log("Issue True");
            
            break;
        case 'return':
            console.log("Return True");
            break;
        case 'delete':
            console.log("Delete True");
            break;
    }
}