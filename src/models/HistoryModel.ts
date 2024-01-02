class HistoryModel{
    id:number;
    userEmail: string;
    checkoutDate: string;
    returnedDate: string;
    title: string;
    author: string;
    description: string;
    img: string;

    constructor(id:number, userEmail: string, checkoutDate: string, returnedDate: string,
                title: string, author:string, description: string, img: string) {
        this.id = id;
        this.userEmail = userEmail;
        this.checkoutDate = checkoutDate;
        this.returnedDate = returnedDate;
        this.author = author;
        this.title = title;
        this.description = description;
        this.img = img;
    }
}

export default HistoryModel;