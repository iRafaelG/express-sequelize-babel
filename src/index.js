// import application
import app from "./app";
import "@babel/polyfill";

function main() {
    app.listen(3001);
    console.log(`Server on port 3001`);
}

main();