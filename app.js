const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.use("/category", categoryRoutes);
app.use("/brand", brandRoutes);
app.use("/product", productRoutes);
app.use("/customer", customerRoutes);

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "gigamallDB"
    });
    console.log("mongodb connected");
}

connectDb().catch((error) => {
    console.error(error);
});

app.listen(port, () => {
    console.log("Server running on port ", port);
});