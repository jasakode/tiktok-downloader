const { TiktokDL } = require("@tobyg74/tiktok-api-dl")
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const config = require("./config/config");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const path = require("path");
const uuid = require("uuid");

async function main() {
    console.clear();
    console.log("Starting Server ....");

    const swagDocs = fs.readFileSync(path.resolve(__dirname, "../src/docs/docs.json"), "utf-8");

    const app = express();
    var jsonParser = bodyParser.json();
    // app.use(cors({ origin: "*" }));
    app.use(express.static('public'))
    // app.use()

    app.get("/", (req, res) => {
        const html = fs.readFileSync("./public/html/index.html", "utf-8");
        res.write(html);
        return res.end();
    });

    app.get("/m", (req, res) => {
        const html = fs.readFileSync("./public/html/mobile.html", "utf-8");
        res.write(html);
        return res.end();
    });

    app.get("/", (req, res) => {
        const html = fs.readFileSync("./public/html/loading.html", "utf-8");
        res.write(html);
        return res.end();
    });
    app.post("/", jsonParser, async (req, res) => {
        const startTime = Date.now();
        TiktokDL(req.body.url, {
            version: "v1" //  version: "v1" | "v2"
        }).then((result) => {
            if(result.status == "error") {
                res.send({
                    error: result.message,
                    message: result.message,
                    response_id: uuid.v4(),
                    response_time: {
                        start: startTime,
                        end: Date.now(),
                        proccess: Date.now() - startTime
                    },
                    author: {},
                    info: {},
                    cover: {},
                    data: {}
                });
                return res.end();
            } else  {
                res.send({
                    error: "",
                    message: "Success Proccess url",
                    response_id: uuid.v4(),
                    response_time: {
                        start: startTime,
                        end: Date.now(),
                        proccess: Date.now() - startTime
                    },
                    author: result.result.author,
                    info: {
                        type: result.result.type,
                        id: result.result.id,
                        createTime: result.result.createTime,
                        description: result.result.description,
                        hashtagduration: result.result.hashtagduration,
                        duration: result.result.duration || 0,
                    },
                    statistics: result.result.statistics,
                    cover: (result.result.dynamicCover.concat(result.result.cover)).concat(result.result.originCover),
                    download_link: {
                        server1: result.result.video && result.result.video.length > 0 ? result.result.video[0] : "",
                        server2: result.result.video && result.result.video.length > 1 || result.result.video.length == 1 ? result.result.video[1] : "",
                        server3: result.result.video && result.result.video.length > 2 || result.result.video.length > 2 ? result.result.video[2] : "",
                    },
                    music: result.result.music,
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

    

    app.use('/api-docs', swaggerUi.serve);
    app.get('/api-docs', swaggerUi.setup(JSON.parse(swagDocs), {
        customSiteTitle: "Tiktok Downloader Api",
        customfavIcon: "/assets/icon/icons8-tiktok-50 (1).png"
    }));

    app.listen(config.port, e => {
        if(e) {
            console.log("applicaton error in : ", e)
        } else {
            console.log("Servre Running on :", `${config.host.includes("https") ? config.host : `http://${config.host}:${config.port}`}`)
            console.log("Read Docs In : ", `${config.host.includes("https") ? config.host : `http://${config.host}:${config.port}`}/api-docs`)
        }
    });
};
main();