const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors')

const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

app.use(cors());
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
// add controller:
app.use(controller());

// parse request body:
app.use(bodyParser());


app.listen(3000);
console.log('app started at port 3000...');