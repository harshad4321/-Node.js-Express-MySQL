const express = require('express')
const app = express()





app.get('/', (req, res) => {
    res.send("<h2>hello World its me,harshad... hai</h2 > ")
})






const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is running PORT: ${PORT}`);
});