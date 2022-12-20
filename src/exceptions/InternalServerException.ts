export class InternalServerException extends Error{
    private status: number
    constructor(message){
        super(message)
        this.status = 500
    }
}