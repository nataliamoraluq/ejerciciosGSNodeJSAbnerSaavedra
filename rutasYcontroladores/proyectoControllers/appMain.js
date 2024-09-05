const express = require('express');
const app = express();
const indexRouter = require('./routers/router');

app.use('/', indexRouter);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`SERVER WORKIN IN HERE http://localhost:${PORT}`);
});