//ini adalah class bernama book
class Book {
    //propertiesatau atribut
    title: string;
    pages: number;
    author: string;
    type: string;
    stock: number;

    //ini adakah parameter dari class book. this untuk manggil atribut(konetsknya di class)
    constructor(title: string, pages: number, author: string, type:string, stock: number) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.type = type;
        this.stock = stock;
    }

    //ini adalah method dari class book
    borrow() {
        if (this.stock === 0) {
                console.log("Book is out of stock");
        } 
        this.stock--;
        console.log(
            `You have borrowed "${this.title}". Remaining stock: ${this.stock}`
        );
    }

    returnBook() {
        this.stock++;
        console.log(
            `You have returned "${this.title}". Remaining stock: ${this.stock}`
        );
    }
    

}

//new Book() adalah object, untuk membuat object baru dari class book
const novelBook = new Book("Laskar Pelangi", 529, "Andrea Hirata", "Novel", 5);
const comicBook = new Book("one piece", 529, "Eiichiro Oda", "Comic", 10);
const ceritaBook = new Book("Hujan", 529, "Tere Liye", "Novel", 0);

novelBook.borrow();
comicBook.returnBook();
ceritaBook.borrow();
