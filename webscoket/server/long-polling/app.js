const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.get('/clock', (req, res) => {
    let $timer = setInterval(() => {
        let date = new Date();
        let seconds = date.getSeconds();
        if (seconds % 5 === 0) {
            res.send(new Date().toLocaleString())
            if ($timer) clearInterval($timer)
        };
    }, 1000);

})
app.listen(8000, () => {
    console.log('服务器启动成功')
})