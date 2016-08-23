## graceful-fs 3.0.10 and electron

`require('graceful-fs')` in an electron app will cause the following error

```
Uncaught TypeError: Cannot read property 'wrapper' of undefined
```

## Setup

```
npm i
```

## Running

```
node bin/launch.js
```
