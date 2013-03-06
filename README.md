# http-echo

http-echo is a simple HTTP server that returns details of any request made to
it. It will listen on whatever port is specified by the environment variable
`PORT`.

```
$ PORT=50000 node lib/server.js
```

```
$ curl http://localhost:50000/hello?name=bob
{
    "headers": {
        "user-agent": "curl/7.21.0 (x86_64-pc-linux-gnu) libcurl/7.21.0 OpenSSL/0.9.8o zlib/1.2.3.4 libidn/1.15 libssh2/1.2.6",
        "host": "localhost:50000",
        "accept": "*/*"
    },
    "url": "/hello?name=bob",
    "method": "GET",
    "httpVersion": "1.1"
}
```
