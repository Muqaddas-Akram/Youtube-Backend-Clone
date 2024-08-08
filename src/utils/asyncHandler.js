//Wapper Function


const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))   //response=succes and catch = error
    }
}


export { asyncHandler }



// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,          //easy for frontended person
//             message: err.message    //for error msg
//         })
//     }
// }