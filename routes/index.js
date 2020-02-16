var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');
var ipService= require('../service/ipservice')
var moment = require('moment');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/history',async function (req, res, next) {
  var ip=req.query.ipaddress;
  var ress;
  console.log(ip)
  if(ip){
    ress=await ipService.getIpRecord(ip);
    console.log(ress);
  }
res.render('history', {
  title: 'Express',
  ipinfo:ress,
  moment: moment
});
});

router.post('/filterRecords',async function(req,res){
  console.log(req.body)
  const ips= await ipService.filterRecords(req);
  res.send(ips)
})
router.post('/getinfo', async function(req, res) {
  var ip = req.body.ipadd;
  var geo = geoip.lookup(ip);
  const save=await ipService.saveInfo(ip,geo);
  res.send(geo);
})


module.exports = router;