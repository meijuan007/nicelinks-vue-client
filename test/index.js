/*
  Date: @2017-10-16
  Desc: 开启本地服务器，运行打包到 Dist 中的代码（注意打包方式是：npm run testing）
*/

let express = require('express')
let path = require('path')
let app = express()
let fs = require('fs')
let chalk = require('chalk')

app.use('/static', express.static(path.join(__dirname, './../dist/static')))

app.get('/', function (req, res) {
  let filePath = path.join(__dirname, './../dist/index.html')
  let content = fs.readFileSync(filePath, 'utf8')
  res.send(content)
})

app.listen(3000, function () {
  console.log(chalk.cyan('Example app listening on port 3000!\n'))
  console.log(chalk.yellow('You Can Visit: ') + chalk.green('http://localhost:3000/'))
})
