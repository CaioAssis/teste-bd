import express from 'express'
import ContatoRouter from './routes/ContatoRoutes.js'
import db from './db.js'

//render.com
//sqlite viewer
//sequelize / sqlite3 - database
//npm install sequelize sqlite3

//npm run dev
//"dev": "npx nodemon index.js" <- no package.json - debug
//sqlite - BD

const app = express()
app.use(express.json()) // avisar que usará .json

db.sync(() => console.log('Banco de dados preparado'))

app.use('/contatos', ContatoRouter)
const port = process.env.PORT || 3000
app.listen(3000, ()=> {console.log('API rodando na porta 3000.')})