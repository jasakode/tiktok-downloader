const { TiktokDL } = require("@tobyg74/tiktok-api-dl")
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const config = require("./config/config");
const bodyParser = require("body-parser");

async function main() {
    console.clear();
    console.log("Starting Server ....")
    const app = express();
    var jsonParser = bodyParser.json();
    // app.use(cors({ origin: "*" }));
    app.use(express.static('public'))
    // app.use()
    app.get("/", (req, res) => {
        const html = fs.readFileSync("./public/index.html", "utf-8");
        res.write(html);
        return res.end();
    });
    app.post("/", jsonParser, async (req, res) => {
        TiktokDL(req.body.url, {
            version: "v1" //  version: "v1" | "v2"
        }).then((result) => {
            if(result.status == "error") {
                res.send({
                    error: result.message,
                    message: result.message,
                    data: {}
                });
                return res.end();
            } else  {
                res.send({
                    error: "",
                    message: "Success Proccess url",
                    data: result.result
                });
                return res.end();
            };
        }).catch(err => {
            console.log(err)
            return res.send({
                error: err.toString(),
                message: "",
                data: {}
            }).end();
        });
    });
    app.listen(config.port, e => {
        if(e) {
            console.log("applicaton error in : ", e)
        } else {
            console.log("Servre Running on :", `${config.host.includes("https") ? config.host : `http://${config.host}:${config.port}`}`)
        }
    });
};
main();