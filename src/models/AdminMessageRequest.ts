class AdminMessageRequest{
    response:string;
    id:number;

    constructor(id:number, response:string) {
        this.response = response;
        this.id = id;
    }

}
export default AdminMessageRequest;