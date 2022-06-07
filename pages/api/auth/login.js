// import cors from 'cors';
// import nextConnect from 'next-connect';
//
// const handler = nextConnect();
//
// handler
//     // .use(cors({
//     //     origin: 'http://localhost:3000'
//     // }))
//     .post(async (req, res) => {
//         //await runMiddleware(req, res, cors);
//         console.log("mehrdad ---------------------")
//         console.log(req.body.email);
//     })
//
// export default handler;
//
// // const cors = Cors({
// //     origin: 'http://localhost:3000'
// // });
//
// //
// // function runMiddleware(req, res, fn){
// //     return new Promise((resolve, reject) => {
// //         fn(req, res, result => {
// //             if(result instanceof Error){
// //                 return reject(result);
// //             }
// //             return resolve(result);
// //         })
// //     });
// // }
//
//
// // const handler = async (req, res) => {
// //     await runMiddleware(req, res, cors);
// //     console.log(2);
// // }
//
// //export default handler;
//
// // export default async (req, res) => {
// //    // await runMiddleware(req, res, cors);
// //     if(req.method == 'POST'){
// //         console.log(req.body);
// //         res.statusCode = 200;
// //         res.setHeader('Content-Type', 'application/json');
// //         res.end(JSON.stringify({data:'login successfully', status: 'success'}));
// //         // res.statusCode(200).json({data:'login successfully', status: 'success'});
// //     }else{
// //         res.statusCode = 403;
// //         res.setHeader('Content-Type', 'application/json');
// //         res.end(JSON.stringify({status: 'error'}));
// //         // res.statusCode(403).json({status: 'error'});
// //     }
// // }