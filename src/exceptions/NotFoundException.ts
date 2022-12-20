export class NotFoundException extends Error{
    private status: number

    constructor(){
        super()
        this.status = 404
    }

    handle(res, message){
        return res.status(404).json({message})
    }
}