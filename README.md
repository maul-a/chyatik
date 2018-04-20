Simple chat application
====================

How to build and run
---------------------
* install deps: 
`cd packages/frontend/ && npm i && cd ../backend && npm i`
* build frontend: `cd packages/frontend && npm run build`
* run server: `cd packages/backend && npm start`

Required ENV parameters
---------------------
* `DATABASE_URI` - URI for your database ([RFC 3986](https://tools.ietf.org/html/rfc3986))
* `PORT` - Application listen on port 3000 by default or by port you'll write here

Notes
---------------------
You can be free to use any database you want, but if you'll use database different from postgres - then you need to install appropriate driver