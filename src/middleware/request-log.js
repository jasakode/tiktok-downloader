const fs =require("fs");
const path = require("path");
const uuid = require("uuid")

const tasks = [];


function taskChange() {
    tasks.map(item => {
        fs.writeFileSync(path.resolve(__dirname, `../../logs/${Date.now()}.json`), JSON.stringify(item), { encoding: "utf-8" })
    })
}

module.exports = async (req, res, next) => {
    const dateN = new Date();
    const startDate = Date.now();
    const pathname = decodeURI(req.path.split("/")[req.path.split("/").length -1]);
    if(!req.cookies["maingames"]) {
        res.cookie("maingames", `${dateN.getFullYear()}-${dateN.getMonth()}-${dateN.getDate()} ${dateN.getUTCHours()}:${dateN.getUTCMinutes()}:${dateN.getUTCSeconds()}:${dateN.getUTCMilliseconds()} ${uuid.v4()}`)
    };
   
    res.on("finish", () => {
        const log = {
            ip: req.ip,
            ips: req.ips,
            pathname: pathname,
            request_date: startDate,
            response_date: Date.now(),
            response_time: Date.now() - startDate,
            headers: req.headers,
            cookie: req.cookies["maingames"],
        };
        tasks.push(log);
        taskChange();
    });

    next();
}