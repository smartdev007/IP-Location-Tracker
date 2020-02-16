const Ip_Info = require('../model/ipSchema').ipModel;

const saveInfo = async (ip, geo) => {
    console.log(ip);
    try {
        var newObject = new Ip_Info({
            ip: ip,
            country: geo.country,
            city: geo.city,
            lang: geo.ll[0],
            lat: geo.ll[1]
        })

        await newObject.save();
        return true;
    } catch (error) {
        return false;
    }
};

const getIpRecord = async (ip) => {
    console.log(ip);
    try {
    const records = await Ip_Info.find({ip:ip}).then(async(result)=>{
            return result;
        })
        return records;
    } catch (error) {
        return false;
    }
};

const filterRecords = async (req) => {
    try {
        
        const limit = parseInt(req.body.count);
        const records = await Ip_Info.find({date:{$gte: req.body.st_date, $lte: req.body.end_date}}).limit(limit).then(async(result)=>{
            console.log('-----'+result);
                return result;
        })
        return records;
    } catch (error) {
        console.log(error);
        return false;
    }
};


module.exports = {
    saveInfo,
    getIpRecord,
    filterRecords
};