const Koa = require('koa');
const Router = require('koa-router');
const server = new Koa();
const router = new Router();
const views = require('koa-views');
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();
const fs = require('fs');


router.get('*', async ctx => {
  const app = new Vue({
    data: {
      url: ctx.url
    },
    template: fs.readFileSync('./template/index.html', 'utf-8')
  });
  await renderer.renderToString(app, (err, html) => {
    ctx.body = html;
  });
});

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(3000);
