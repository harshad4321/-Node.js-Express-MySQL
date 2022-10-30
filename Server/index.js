const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//create

app.post('/insert', (req, res) => {

})

// read
app.get('/getAll', (req, res) => {
    // res.send("<h2>hello World its me,shad....</h2 > ")
    res.json({
        success: true
    })
})

//update




//delete



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is running PORT: ${PORT}`);
});