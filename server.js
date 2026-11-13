
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>THÔNG TIN SINH VIÊN</h1>
        Họ và tên: Huỳnh Thanh Tùng<br>
        Mã sinh viên: CD-CNTT18A27<br>
        Lớp: CD-CNTT18A
    `);
}).listen(3000);

console.log('Server đang chạy tại http://localhost:3000');
