const express = require('express');
const server = express();
const PORT = process.env.PORT || 4001;
server.listen(PORT, () =>{
    console.log(`PORT ${PORT} is active!`)
})