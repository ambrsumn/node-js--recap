
export const errorHandler = (error, req, res, next) =>
{
    // console.log(error);
    return res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
        data: null
    })
}