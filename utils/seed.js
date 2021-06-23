const mongoose = require("mongoose");
const { Product, Shop, User } = require("../models");
const axios = require("axios");
const chalk = require("chalk");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/medicalsupply",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const roles = ["owner", "sales", "sales"];
const productsData = [
    {
        name: "Nasal Endoscope",
        slug: "nasal-endoscope",
        sku: "1",
        description: "Camera to look inside nasal cavity"
    },
    {
        name: "Spin Plus Balloon Sinuplasty System",
        slug: "spin-plus-balloon-sinuplasy-system",
        sku: "2",
        description: "Balloon that inflates inside sinus for one-time access"
    },
    {
        name: "Multi-Sinus Dilation",
        slug: "multi-sinus-dilation",
        sku: "3",
        description: "Balloon mechanism that is for multi-sinus"
    },
    {
        name: "Clarifix",
        slug: "clarifix",
        sku: "4",
        description: "Cryotherapy to the nose. Cold temperatures going directly to the nerves inside the nose to alleviate symptoms"
    }
]

const seed = async function () {

    try {
        // get 3 random users
        const usersData = await axios.get("https://randomuser.me/api/?results=3");
        // add roles and passwords to users
        const users = usersData.data.results.map((user, idx) => {
            return { ...user, role: roles[idx], password: "password#1" }
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
