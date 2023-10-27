const { TiktokDL } = require("@tobyg74/tiktok-api-dl")
const express = require("express");
const fs = require("fs");
const config = require("./config/config");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const path = require("path");
const uuid = require("uuid");
const cookieParser = require("cookie-parser");
const logWritter = require("./middleware/request-log");


async function main() {
    console.clear();

    console.log("Starting Server ....");
    const swagDocs = fs.readFileSync(path.resolve(__dirname, "../src/docs/docs.json"), "utf-8");
    const app = express();
    var jsonParser = bodyParser.json();
    app.use(cookieParser());

    // app.use(logWritter);

    app.use(express.static('public'))
    app.use(express.static('public/html'))
    app.use(express.static('public/views'));
    
    const html = fs.readFileSync("./public/html/index.html", "utf-8");
    const sitemaps = fs.readFileSync("./public/html/index.html", "utf-8");

    // app.use('/api-docs', swaggerUi.serve);
    // app.get('/api-docs', swaggerUi.setup(JSON.parse(swagDocs), {
    //     customSiteTitle: "Tiktok Downloader Api",
    //     customfavIcon: "/assets/icon/icons8-tiktok-50 (1).png"
    // }));
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
 
    app.get("/", (req, res) => {
        res.write(html);
        return res.end();
    });
    app.get("/index.html", (req, res) => {
        res.write(html);
        return res.end();
    });
    
    app.get("/m", (req, res) => {
        const mobilePagePath = path.join(__dirname, "../public", "html", "mobile.html");
        res.status(200).sendFile(mobilePagePath);
    });

    app.get("/*", (req, res) => {
        res.redirect("/404/")
        return res.end();      
    });

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

