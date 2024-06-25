const express = require("express");
const app = express();
const mysql = require("./mysql");
const db = require("./models");

app.get('/', async (req, res)=>{
    const reply = await db.replyMessage.findOne({
            where: {
                id: 1
            },
            include:[
                {
                    model: db.groupMessage,
                    as: 'reply',
                }
            ]
        }
    )
    const groupMessage = await db.groupMessage.findOne({
        where: {
            id: 1
        },
        include:[
            {
                model: db.replyMessage
            }
        ]
    }
)
    console.log(reply, groupMessage);
    res.json({reply, groupMessage});
})


app.listen(3000, ()=>{
    console.log("listening...");
});

