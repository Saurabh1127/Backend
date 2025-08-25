class ApiError extends Error{
    constructor(
        statusCode,
        message = "Somthing Went Wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data =  null 
        this.message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            error.captureStackTrace(this, this.constructor )
        }
    }
}

export {ApiError}