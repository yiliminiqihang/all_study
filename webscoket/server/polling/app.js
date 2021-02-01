const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.get('/clock', (req, res) => {
    res.send(new Date().toLocaleString())
})
app.listen(8000, () => {
    console.log('服务器启动成功')
})