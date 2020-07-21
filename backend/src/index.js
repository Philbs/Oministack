const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/recurso |localhost:3333/user
 */
/**
 * metodos http:
 * get: buscar/listar informacao do backend
 * post: criar informaçaõ no backend
 * put: alterar uma informacao do backend
 * delete: deletar informacao no backend
 */

 /**
  * Tipos de parametros:
  * query params: parametros nomeados enviados na rota após "?" (filtros, paginação)
  * route params: parametros utilizados para identificar recursos
  * request body: corpo da requizição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: Mysql, sqlite,postgreeSQL, oracle, microsoft sql server
   * noSQL: mongoDB,couchDB,etc
   */

   /**
    * Driver: select * from user
    * query Builder: table('users').(select('*'),where()
    */



app.listen(3333);
