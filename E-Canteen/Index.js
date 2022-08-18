const express = require('express')
const mongoose = require('mongoose')  
const app = express()
const cartController = require("./controller/cart-controller")
const statusController = require("./controller/status-controller")
const locationController = require("./controller/location-controller")
const orderController = require("./controller/order-controller")
const orderDetailController = require("./controller/orderDetail-controller")
const productController = require("./controller/product-controlller")
const subCategoyController = require("./controller/sCategory-controller")
const categoyController = require("./controller/category-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
// const userController = require("./controller/.*")
const req = require('express/lib/request')
// app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect("mongodb://localhost:27017/E-Canteen",function(err){
    if(err){
        console.log("Connection failed")
    }else{
        console.log("Established")
    }
})
// Role's API
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.listDetails)
app.delete("/roles/:roleId",roleController.deleteSpacific)
app.put("/roles",roleController.upDateData)

//User APIs
app.post("/users",userController.addUser)
app.get("/users",userController.listUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

//Login users check
app.post("/login",userController.login)


//Category APIs
app.post("/categorys",categoyController.addItem)
app.delete("/categorys/:itemId",categoyController.deleteItem)
app.get("/categorys",categoyController.listItem)
app.put("/categorys",categoyController.updateItem)

//subCategory APIs
app.post("/subCategorys",subCategoyController.addItem)
app.delete("/subCategorys/:itemId",subCategoyController.deleteItem)
app.get("/subCategorys",subCategoyController.listItem)
app.put("/subCategorys",subCategoyController.updateItem)

//oreders APIs
app.post("/orders",orderController.addOrder)
app.get("/orders",orderController.listOrder)
app.delete("/orders",orderController.removeOrder)
app.put("/orders",orderController.updateOrder)

//oredersDetail APIs
app.post("/ordersDetail",orderDetailController.addOrderDetail)
app.get("/ordersDetail",orderDetailController.listOrderDetail)
app.delete("/ordersDetail",orderDetailController.removeOrderDetail)
app.put("/ordersDetail",orderDetailController.updateOrderDetail)

//product APIs
app.post("/products",productController.addProduct)
app.get("/products",productController.listProduct)
app.delete("/products",productController.removeProduct)
app.put("/products",productController.updateProduct)

//Cart APIs
app.post("/carts",cartController.addtoCart)
app.get("/carts",cartController.listCart)
app.delete("/carts",cartController.removeFromCart)
app.put("/carts",cartController.updateCart)

//location APIs
app.post("/locations",locationController.addLocation)
app.get("/locations",locationController.listLocation)
app.delete("/locations",locationController.removeLocation)
app.put("/locations",locationController.updateLocation)

//Status APIs
app.post("/status",statusController.addStatus)
app.get("/status",statusController.listStatus)
app.delete("/status",statusController.removeStatus)
app.put("/status",statusController.updateStatus)



app.get("/",function(req,res){
    res.write("Succes fully riched in the browser")
    res.end()
})

app.listen(3000,function(){
    console.log("Server Connection Established")
})

