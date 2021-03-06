const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const filePath = path.join(path.dirname(require.main.filename), 'data', 'info.json');

app.use(bodyParser.urlencoded({extended: true}));


router.post('/',(req,res)=>{
    let addIno = {
        imgUrl: req.body.imageUrl, 
        namePage: req.body.namePage,
        achievement: req.body.achievement
    };
    fs.writeFile(filePath, JSON.stringify(addIno), (error) =>{
       if(error)console.log(error);
    });

    fs.readFile(filePath,(error, fileContent) => {
        if(error){
            console.log(error);
        }else{
            let infoBd  = JSON.parse(fileContent);
            console.log(infoBd.namePage);
            res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
        
                info: infoBd
            });
        }
    });

});
router.post("/add",(req,res)=>{
 
    res.render(path.join(__dirname, '..', 'views', 'changePage.ejs'));
});
router.get('/',(req,res)=>{

     fs.readFile(filePath,(error, fileContent) => {
        if(error){
            console.log(error);
        }else{
            if(Object.entries(fileContent).length <= 2){
                let addIno = {
                    imgUrl: "https://memepedia.ru/wp-content/uploads/2016/08/fdKZ-ZpN7iw.jpg", 
                    namePage: "SpongeBob SquarePants",
                    achievement: "2 hours without internet"
                };
                fs.writeFile(filePath, JSON.stringify(addIno), (error) =>{
                   if(error)console.log(error);
                });
            }
        }
    });
    fs.readFile(filePath,(error, fileContent) => {
        if(error){
            console.log(error);
        }else{
            let infoBd  = JSON.parse(fileContent);
            res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
        
                info: infoBd
            });
        }
    });

});
module.exports = router;