# Koa Static Middleware

![logo](logo.png)

![build status](https://travis-ci.org/mosluce/koa-static.svg?branch=master)

Lightweight static files middleware for Koa2

## Install

```shell
npm install -S koa-static-middleware
```

## Usage

```js
const Koa = require('koa');
const path = require('path');

const staticMiddleware = require('./libs/koa-static-middleware');

const app = new Koa();

app.use(staticMiddleware(path.join(__dirname, 'public')));
```
