class Home {
    constructor() {
    }
    static unlock(passPhrase){
        if (passPhrase == "please"){
            console.log("Please enter");
        } else {
            console.log("not allowed")
        }
    }
}

Home.unlock("please");
Home.unlock("Please");