const express = require("express");
const ProductContainer = require("./productContainer");
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Conexión del Servidor ------------------------------------------------------
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`));
// ---------------------------------------------------------------------------------

// app.get("/", (req, res) => {
//     res.render("index");
// });

const products = new ProductContainer();

app.get('/productos', (req, res) => {
    res.render('products.pug', {
        products: products.getAll()
    })
});

app.post('/productos', (req, res) => {
    products.add(req.body);
    res.redirect("/");
});

// ---------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.render('index.pug');
}
);
/* ------------------------------------------------------ */