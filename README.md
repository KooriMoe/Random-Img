# Random-Img
这个接口不是人写的（指 GitHub Copilot 写了一大部分，已经变成 Tab 工具人了...   

## Dependencies
* express
* fs

## Usage
```
// Start the Express server.
node app.js

GET http://127.0.0.1:4000/random-img[params]
params:
    json = true: Output as JSON instead of redirecting directly to an image.
```

## Add photos to database
Modify the `img-urls.csv` file plz.