const express = require('express');
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const categoryRouter = require('./categoryRoutes');


const apiRouter = express.Router();

apiRouter.use('/user', userRouter)
apiRouter.use('/product', productRouter)
apiRouter.use('/category', categoryRouter)
apiRouter.get("/", (req, res) => {
    res.send("Hello World!");
  });
module.exports = apiRouter