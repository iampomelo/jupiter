const Koa = require('koa');
const Router = require('koa-router');
const server = new Koa();
const router = new Router();
const Vue = require('vue');
const renderer = require('vue-server-renderer').createBundleRenderer({
  runInNewContext: false
});
const createApp = require('./src/entry-server');


router.get('*', async ctx => {
  const context = {url: req.url};
  await createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      ctx.body = html;
    });
  });
});

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(3000);
