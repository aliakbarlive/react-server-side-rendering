import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDomServer from 'react-dom/server'
import express from 'express'
import App from './src/App'

const PORT = process.env.PORT|| 3000
const app = express()

app.get('/', (req,res) =>{

    fs.readFile( path.resolve('./public/index.html'),"utf8",(err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send("An error occurred");
        }else{
            res.send(
                data.replace(
                    `<div id = 'root'></div>`,
                    `<div id = 'root'> ${ReactDomServer.renderToString(<App/>)}</div>`
                )
            )
            console.log(data)
        }
    })
})
app.use(
    express.static(path.resolve(__dirname, '.', 'dist'), {maxAge:"30d"}),
    app.listen((PORT, ()=>{
        console.log('server is running on', PORT)
    }))
)
