const app =  require( "./app");
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log('Servidor de pé na porta 3000!'),
);