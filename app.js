// const http = require('http')

// const server = http.createServer((req, res)=>{
//    if(req.url === '/'){
//     res.end('Welocome to our home page!!!')
//    }
//     if(req.ulr === '/about'){
//         res.end('Here is our short history')
//     }

//     res.end(`
//         <h1> Oops!</h1>
//       <p> We can't seem to find the page you are looking for</p>
//        <a href ="/">back home </a>
//     `) 
// })

// server.listen(4000)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
