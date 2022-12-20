export class BadRequestException extends Error{
    private status: number

    constructor(message){
        super(message)
        this.status = 400
    }
}