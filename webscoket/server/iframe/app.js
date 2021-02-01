const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.get('/clock', (req, res) => {
    setInterval(function () {
        res.write(`
            <script type="text/javascript">
                parent.document.getElementById('container').innerHTML = "${new Date().toLocaleTimeString()}";
            </script>
        `);
    }, 1000);

})
app.listen(8000, () => {
    console.log('服务器启动成功')
})