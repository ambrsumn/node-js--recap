// export class GlobalResponse 
// {
//     constructor(status, message, data)
//     {
//         this.status = status;
//         this.message = message;
//         this.data = data;
//     }

//     sendData()
//     {
//         return {
//             status: this.status,
//             message: this.message,
//             data: this.data
//         }
//     }
// }

export const globalResponse = (req, res, status, message, data) =>
{
    return res.status(status).json({
        status: status,
        message: message,
        data: data
    })
}