# Express Cookie Demo

This demonstrates the use of signed and unsigned cookies.

First, install dependencies (`express` and `cookie-parser`):

```
npm i
```

Then, run the server:

```
node src/server
```

Visit http://localhost:8080 in a browser (8080 is the default port).  On the initial visit, the client will have new cookies, but the server will not.  On subsequent visits, you will see cookies on the server and in the browser.  To see the difference in behavior between signed and unsigned cookies, try changing the value of each cookie in the browser, then reload the page.

To access cookies in Chrome, [open the dev tools](https://developer.chrome.com/docs/devtools/open/), navigate to the "Application" tab, and expand "Cookies" (under "Storage").  You can set the value of a cookie by right-clicking on it and choosing 'Edit "Value"'.

