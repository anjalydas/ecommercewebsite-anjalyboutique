const express = require('express');
const { getAllUsers, getAUserById, addUser, userLogin, userLogout, userProfile, updateAUserById, deleteAUserById } = require('../controllers/userControllers');
const authAdmin = require('./middlewares/authAdmin');
const authUser = require('./middlewares/authUser');

const userRouter = express.Router();



userRouter.get('/', getAllUsers)
userRouter.get('/:id', getAUserById)
userRouter.post('/:sign-up', addUser)
userRouter.post('/:login', userLogin)
userRouter.post('/:logout', userLogout)
userRouter.post('/:profile/:id', userProfile)
userRouter.get('/:id',authAdmin, authUser)
userRouter.patch('/:id', updateAUserById, authAdmin, authUser)
userRouter.delete('/:id', deleteAUserById, authAdmin, authUser)
module.exports = userRouter