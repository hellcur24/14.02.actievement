const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
let namePage = "SpongeBob SquarePants";
let achievementPage = "2 hours without internet";
let imgPage= "https://memepedia.ru/wp-content/uploads/2016/08/fdKZ-ZpN7iw.jpg";

app.use(bodyParser.urlencoded({extended: true}));


router.post('/',(req,res)=>{
    res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
        imgPage: imgPage,
        namePage: namePage,
        achievementPage: achievementPage

    });
});
router.post("/add",(req,res)=>{
    imgPage = String(req.body.imageUrl);
    console.log(req.body.namePage);
    namePage= String(req.body.namePage);
    achievementPage =req.body.achievement;
    res.render(path.join(__dirname, '..', 'views', 'changePage.ejs'));
});
router.get('/',(req,res)=>{
    res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
        imgPage: imgPage,
        namePage: namePage,
        achievementPage: achievementPage

    });
});
module.exports = router;