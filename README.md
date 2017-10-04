## Axios

Axios es una librería de JS para hacer promesas.

1. Instalar axios:
```
npm install axios -S
```
2. Instalamos express:
```
npm install express -S
```
3. Instalamos body-parser:
```
npm install body-parser -S
```
4. Creamos un servidor nodejs:
* server.js


5. Creamos una página:
* index.html
* Se importa la librería axios:
```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
* Se crean las funciones que van a manejar la petición al servidor y la promesa cuando retorne.

* Se crean los botones que lanzan las funciones anteriores.

6. Se modifica el package.json agregandole el start:
```javascript
"scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

7. Se lanza el servidor nodejs:
```
npm start
```

8. En el navegador:
```
http://localhost:3000/
```