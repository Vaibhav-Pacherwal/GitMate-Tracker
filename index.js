#!/usr/bin/env node
const { program } = require("commander");
const spinner = require("cli-spinners").default;
const axios = require("axios");
const chalk = require("chalk").default;
const ora = require("ora");

program
    .version("5.0.0")
    .description("GitHub Profile CLI")
    .argument("Usage: gitmate <username>")

    let arg = process.argv[2]
    let url = "https://api.github.com/users/" + arg;
    getInfo();

    async function getInfo() {
        try {
            let res = await axios.get(url);
            console.log("👤" + (chalk.hex('#E06D37')("Name: ")) + chalk.hex('#BAB86C')(res.data.name));
            console.log("🔗" + (chalk.hex('#E06D37')("Username: ")) + chalk.hex('#BAB86C')(res.data.login));
            console.log("📂" + (chalk.hex('#E06D37')("Public Repositories: ")) + chalk.hex('#BAB86C')(res.data.public_repos));
            console.log("👥" + (chalk.hex('#E06D37')("Followers: ")) + chalk.hex('#BAB86C')(res.data.followers));
            console.log("👥" + (chalk.hex('#E06D37')("Following: ")) + chalk.hex('#BAB86C')(res.data.following));
            console.log("📅" + (chalk.hex('#E06D37')("Created_at: ")) + chalk.hex('#BAB86C')(res.data.created_at));
            console.log("🔄" + (chalk.hex('#E06D37')("Updated_at: ")) + chalk.hex('#BAB86C')(res.data.updated_at));
            console.log("🔗" + (chalk.hex('#E06D37')("GitHub Profile: ")) + chalk.hex('#BAB86C')(res.data.html_url));
            console.log(chalk.hex('#00FF00')("Profile Fetched Successfully!"))
        } catch (error) {
            chalk.red("Error fetching profile!");
            console.log(chalk.hex('#FF0000')("Profile Not Found!"));
          }
    }
    program.parse(process.argv);