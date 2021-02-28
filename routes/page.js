const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const filePath = path.join(path.dirname(require.main.filename), 'data', 'info.json');
let namePage = "SpongeBob SquarePants";
let achievementPage = "2 hours without internet";
let imgPage= "https://memepedia.ru/wp-content/uploads/2016/08/fdKZ-ZpN7iw.jpg";

app.use(bodyParser.urlencoded({extended: true}));


router.post('/',(req,res)=>{
    let infoBd  = [];
    let addIno = [req.body.imageUrl, req.body.namePage, req.body.achievement];
    fs.writeFile(filePath, JSON.stringify(addIno), (error) =>{
        console.log(error);
    });
    fs.readFile(filePath,(error, fileContent) => {
        if(error){
            console.log(error);
        }else{
            infoBd  = fileContent;
            console.log("12sa " + fileContent);
        }
    });
    res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
        
        imgPage: req.body.imageUrl,
        namePage: req.body.namePage,
        achievementPage: req.body.achievement

    });
});
router.post("/add",(req,res)=>{
 
    imgPage = String(req.body.imageUrl);
    namePage= String(req.body.namePage);
    achievementPage =req.body.achievement;
    res.render(path.join(__dirname, '..', 'views', 'changePage.ejs'));
    let addIno =String(req.body.namePage);
    fs.writeFile(filePath, JSON.stringify(addIno), (error) =>{
        console.log(error);
    });
});
router.get('/',(req,res)=>{

    res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
        imgPage: imgPage,
        namePage: namePage,
        achievementPage: achievementPage

    });
});
module.exports = router;