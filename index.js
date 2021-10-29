const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.route'))

async function start() {
    try{
        await mongoose.connect('mongodb+srv://denys_admin:dtlthysrjd12@cluster0.ytxdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })

    } catch(err) {console.error(err)}
}
start()