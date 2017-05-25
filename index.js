const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const send = require('koa-send');

const stat = Promise.promisify(fs.stat);

module.exports = root => async (ctx, next) => {
  const filepath = path.join(root, ctx.path);
  const fileExists = await new Promise((resolve) => {
    fs.exists(filepath, (exists) => {
      resolve(exists);
    });
  });
  const stats = await stat(filepath);
  if (!fileExists || stats.isDirectory()) {
    await next();
  } else {
    await send(ctx, ctx.path, { root });
  }
};

