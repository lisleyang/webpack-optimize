1. `npm install @babel/plugin-syntax-dynamic-import`
2. .babelrc

```js
{
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}

```

3. 

```js

button.onclick = e => import('./print').then(module => {
     var print = module.default;

     print();
});

```