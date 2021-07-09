const mongoose = require("mongoose");
const { Product, Shop, User } = require("../../models");
const axios = require("axios");
const chalk = require("chalk");
const bcrypt = require("bcrypt");
require("dotenv").config();

const rolesData = require("./roles");
const productsData = require("./products");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/medicalsupply",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const seed = async function () {

    try {
        await db.dropDatabase();
        // get 3 random users
        const usersData = await axios.get("https://randomuser.me/api/?results=4");
        // add roles to users
        const users = usersData.data.results.map((user, idx) => {
            let hashPass = bcrypt.hashSync("password#1", 10);
            return { ...user, role: rolesData.roles[idx], password: hashPass };
        });

        // insert users in db
        const newUsers = await User.insertMany(users);
        console.log(chalk.green(`Inserted ${newUsers.length} users in db.`));
        
        // insert shop in db
        const newShop = await Shop.create({
            name: "The Medical Depot",
            slug: "the-medical-depot",
            contacts: newUsers.map(user => user._id)
        });
        console.log(chalk.green(`Inserted 1 shop in db.`));
        // add shop _id to products
        const products = productsData.map(product => {
            return { ...product, shop: newShop._id }
        });
        // insert products in db
        const newProducts = await Product.insertMany(products);
        console.log(chalk.green(`Inserted ${newProducts.length} products in db.`));
        // insert products in Shop array
        await Shop.findOneAndUpdate({ _id: newShop._id }, { $push: { products: newProducts.map(product => product._id) } });

    } catch (e) {
        console.log(chalk.red(e));
    } finally {
        process.exit(0);
    }
}

seed();
