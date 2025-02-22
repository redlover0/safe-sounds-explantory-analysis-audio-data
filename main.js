const csv = require('csv-parser');
const fs = require('fs');
const Chart = require('cli-chart');       
const prompt = require('prompt');         


const SafeSoundMenu = async () => {
    console.log("_".repeat(50))
    console.log("\n Welcome to SafeSound, creating advanced audio analytics to meet intellegent amplifcation, \n setting a new standards on using science of sound")
    console.log("_".repeat(50))
    console.log("1. Record New Data. & store it within our database.")
    console.log("2. Anayze SafeSound collected data") // here were analyzing the data from the product we've made
    console.log("3. Visualize Audio around you") // here youre seeing audio and its teaching you what hurts your hearing
    console.log("4. Exit")
    console.log("Founders: Dhamari, Ali, Maha")
    const { choice } = await prompt.get(["Choice"]);
    console.log("Testing inside of safesounds menu: ", typeof choice);
    return choice;
};

// set a set setTimeout
const main = async () => {
    prompt.start()
    try {
        // my set up
        while (true) {

            const choice = await SafeSoundMenu();
            console.log(typeof choice)
             // this is their choice
            switch (choice) {
                case '1':
                    // call function that Record New Data. & store it within our database
                    console.log("youre recording data")
                    setTimeout(() => {
                        // runs after 2 seconds
                        console.log("this has ended");
                      }, 2000);
                    break;
                case '2':
                    // call function that does data analysis
                    console.log(" heres data anaysis");
                    break;

                case '3':
                    console.log("you are visualzing the sound around you");
                    break;
                case '4':
                    console.log("Thank you");
                    return
                default:
                    console.log("you didnt choose anything so ");
                    break;
            }
        }

    } catch (error) {
        console("this didnt work");
    }
};

main()
