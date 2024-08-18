const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log("Server is live  on ", PORT )
})

// CRUD Authentication

// to read data
const users =[
    {"firstName": "Walter",
    "lastName": "Onyekwelu"
    },
    {"firstName": "Walter",
    "lastName": "Onyekwelu"
    },
    {"firstName": "Walter",
    "lastName": "Onyekwelu"
    },
    {"firstName": "Walter",
    "lastName": "Onyekwelu"
    },
   
]
// to test our endpoint
// app.get('/', (req, res)=>{
//     res.json("welcome")
// })
app.get('/users', (req, res)=>{
    res.json(users)
})


// Register
// app.post("/register",(req, res)=>{
//     const {name, phoneNumber,email,address, ZipCode,Stae, Nationality} =req.body

// })

// // Login
// app.post("/login",(req, res)=>{
//     const {email,password} =req.body

// })

