class ApiError extends Error{
    constructor(
        statusCode,
        message = "Somthing Went Wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data =  null 
        this.message
        this.success = false
        this.errors = errors

        if(statck){
            this.statck = statck
        }else{
            error.captureStackTrace(this, this.constructor )
        }
    }
}

export {ApiError}