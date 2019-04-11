# webpack-demo
Show the simple introduction about the author information

# How to use
## 1. clone the repo
```
git clone https://github.com/ruozhao/webpack-demo.git
```

## 2. install dependeces
```
cd webpack-demo
npm install
```

## 3. play with the source file main.jsx
You can follow the command 1 or 2 below.
1. only generate the package
```
npm run build
```
It use `webpack --progress --colors` to generate the package, then you open the index.html to view the infomation. You can use ` --watch` to monitor the change of the code to improve the build speed.

2. will open browser automaticly
```
npm run dev
```
It use `webpack-dev-server` to start a static express resource web server about `http://localhost:8080` and `--open` will open the index.html automaticly to show the information in browser.
