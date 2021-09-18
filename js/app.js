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
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description about book"></textarea>
</div>
<div class="mb-3">
    <button id="1"  type="button" class="btn btn-danger operatingButton addBookButton" ">Add book</button>
</div>`;
    insertDiv.innerHTML = html;
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
        let descriptionOfBook = insertDiv.children[2].children[0];
        let temp = [titleOfBook.value, authorOfBook.value, descriptionOfBook.value];
        booksObjArray.push(temp);
        localStorage.setItem("booksList", JSON.stringify(booksObjArray));
        titleOfBook.value = "";
        authorOfBook.value = "";
        descriptionOfBook.value = "";
    });
}

function listBook() {
    // html = `<h5 class="card-title">List Of Books</h5>
    // <div class="row">`
    // let booksList = localStorage.getItem("booksList");
    // if (booksList == undefined || booksList == null || booksList == "[]") {
    //     booksObjArray = [];
    // }
    // else {
    //     booksObjArray = JSON.parse(booksList);
    // }
    // booksObjArray.forEach(element => {
    //     title = element[0];
    //     author = element[1];
    //     description = element[2];
    //     html+=`<div class="col-sm-6">
    //     <div class="card">
    //     <div class="card-body">
    //       <p class="h5 card-title">${title}</p>
    //       <p class="card-text"><small class="text-muted">-- by ${author}</small></p>
    //       <p class="card-text">${description}.</p>
    //     </div>
    //   </div>
    // </div>`
    // });


    // html+=`</div>`;
    // insertDiv.innerHTML = html;
    displayOfBooks(`List Of Books`, '');
}

function issueBook() {
    displayOfBooks('Issue Of Books', '<button id="2" type="button" class="btn btn-outline-secondary operatingButton" onclick="displayFunction(this.id)">Issue Book</button>');
}

function displayOfBooks(tit, buttonBtn, extraButton) {
    if (extraButton == undefined) {
        html = `
    <h5 class="card-title">${tit}</h5>
            <p class="card-text">
            <span id='2s' class="badge rounded-pill bg-light text-dark btn " onclick="buttonToggle(this.id)">Title</span>
            <span id='1s' class="badge rounded-pill bg-dark btn " onclick="buttonToggle(this.id)">Author</span>
            </p>
            <div id="nextSiblingAdder" class="mb-3">
                <input id="searchBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Search By Title">
            </div>
            <div id="addNewText">

            </div>
    `
    }
    else{
        html = `
    <h5 class="card-title">${tit}</h5>
            <p class="card-text card-position">
            <span id='2s' class="badge rounded-pill bg-light text-dark btn " onclick="buttonToggle(this.id)">Title</span>
            <span id='1s' class="badge rounded-pill bg-dark btn " onclick="buttonToggle(this.id)">Author</span>
            
    ${extraButton}
            </p>
            <div id="nextSiblingAdder" class="mb-3">
                <input id="searchBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Search By Title">
            </div>
            <div id="addNewText">

            </div>
    `
    }
    




    insertDiv.innerHTML = html;
    listBookWithSearchBar(buttonBtn);
    // addNewText.replaceWith();

}

function returnBook() {
    // html = `
    // <h5 class="card-title">Return Of Books</h5>
    //         <p class="card-text">

    //         </p>
    //         <div id="nextSiblingAdder" class="mb-3">
    //             <input id="returnBookInput" type="text" class="form-control form-outline-danger ToggleText" id="exampleFormControlInput1" placeholder="Return Book Title">
    //         </div>
    //         <div id="addNewText">

    //         </div>
    // `

    // insertDiv.innerHTML=html;
    // listBookWithSearchBar(`<button id="3"   type="button" class="btn btn-outline-success operatingButton" onclick="displayFunction(this.id)">Return Book</button>`);
    // // addNewText.replaceWith();
    displayOfBooks('Return Of Books', '<button id="2" type="button" class="btn btn-outline-danger operatingButton" onclick="displayFunction(this.id)">Return Book</button>');

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
    listBookWithSearchBar();
}


function listBookWithSearchBar(x) {
    html = `
    <div class="row">`
    let booksList = localStorage.getItem("booksList");
    if (booksList == undefined || booksList == null || booksList == "[]") {
        booksObjArray = [];
    }
    else {
        booksObjArray = JSON.parse(booksList);
    }
    booksObjArray.forEach(element => {
        title = element[0];
        author = element[1];
        description = element[2];
        html += `<div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <p class="h5 card-title">${title}</p>
                            <p class="card-text"><small class="text-muted">-by ${author}</small></p>
                            <p class="card-text">${description}.</p>
                            ${x}
                        </div>
                    </div>
                </div>`
    });


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
}
function listDeleteBookWithSearchBar() {
    html = `
    <div class="row">`
    let booksList = localStorage.getItem("booksList");
    if (booksList == undefined || booksList == null || booksList == "[]") {
        booksObjArray = [];
    }
    else {
        booksObjArray = JSON.parse(booksList);
    }
    booksObjArray.forEach(element => {
        title = element[0];
        author = element[1];
        description = element[2];
        html += `<div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <p class="h5 card-title">${title}</p>
                            <p class="card-text"><small class="text-muted">-by ${author}</small></p>
                            <p class="card-text">${description}.</p>
                            ${x}
                        </div>
                    </div>
                </div>`
    });


    html += `</div>`;
    addNewText = document.getElementById("addNewText");
    addNewText.innerHTML = html;

    returnBookInput = document.getElementById("returnBookInput");
    returnBookInput.addEventListener("input", function () {
        value = returnBookInput.value;
        Array.from(addNewText.children[0].children, function (element) {
            if (element.children[0].children[0].children[0].innerText.toLowerCase().includes(value.toLowerCase()) || element.children[0].children[0].children[1].innerText.toLowerCase().includes(value.toLowerCase())) {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }

        });
    });
}

function deleteBook() {
    displayOfBooks('Delete Of Books', '<button id="2" type="button" class="btn btn-outline-secondary operatingButton" onclick="displayFunction(this.id)">Delete Book</button>', `<button id="deleteAllBooks" type="button" class="btn btn-outline-secondary operatingButton" onclick="displayFunction(this.id)">Delete All Book</button>`);
}