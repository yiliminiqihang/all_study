
/*
实现一
*/
let express = require('express');
let app = express();
app.use(express.static(__dirname));
let sendCount = 1;
app.get('/eventSource', function (req, res) {
    res.header('Content-Type', 'text/event-stream',);
    setInterval(() => {
        res.write(`event:message\nid:${sendCount++}\ndata:${Date.now()}\n\n`);
    }, 1000)
});
app.listen(8000);
/*
实现二
*/
// let express = require('express');
// const SseStream = require('ssestream').default
// let app = express();
// app.use(express.static(__dirname));

// let sendCount = 1;
// app.get('/eventSource', function (req, res) {
//     const sseStream = new SseStream(req);
//     sseStream.pipe(res);
//     const pusher = setInterval(() => {
//         sseStream.write({
//             id: sendCount++,
//             event: 'message',
//             retry: 20000, // 告诉客户端,如果断开连接后,20秒后再重试连接
//             data: { ts: new Date().toTimeString() }
//         })
//     }, 1000)

//     res.on('close', () => {
//         clearInterval(pusher);
//         sseStream.unpipe(res);
//     })
// });
// app.listen(8000, () => {
//     console.log('服务器启动成功')

// });