var user = {
    name: 'zhangsan',
    email: "zhangsan@kylinos.cn"
};

module.exports = {
    'GET /api/user': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = {
            user: user
        };
    },

    'POST /api/user': async (ctx, next) => {
        var p = {
            name: ctx.request.query.name,
            price: ctx.request.query.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};