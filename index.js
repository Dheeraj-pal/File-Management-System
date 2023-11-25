const express = require("express");
const fileRoutes = require("./fileRoutes");

const app = express();

app.get('/', (req,res)=>{
    res.send(200).json({
        msg: 'welcome to file management system'
    })
})

app.use("/files", fileRoutes);

module.exports = {
  app,
};
   