const express = require('express');
const app = express();
const userRouter = require('./routers/userRoute');

app.use('/', userRouter);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`SERVER WORKIN IN HERE http://localhost:${PORT}`);
});