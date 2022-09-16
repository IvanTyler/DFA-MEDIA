const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const indexRouter = require('./routes/indexRoute')


app.use('/', indexRouter)

app.listen(PORT || 3001, () => {
    console.log(`server started PORT: ${PORT}`);
})