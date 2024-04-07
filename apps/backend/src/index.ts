
const express = require('express');
const app = express();
import { COMMON_PI} from "@repo/common/config";
console.log(COMMON_PI);
app.get("/", (req:any, res:any) => {
    res.send("Hello dashboard");
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
    
})