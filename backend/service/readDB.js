var mysql = require('mysql')
var db = require('./config');
let instance = null;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


class readDB {

    static getDbServiceInstance() {
        return instance ? instance : new readDB();
    }

    async getAllData() {

        try {
            const response = await new Promise((resolve, reject) => {

                const query = "SELECT * FROM host_info WHERE date IN (SELECT max(date) FROM host_info);";

                db.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            var resultArray = Object.values(JSON.parse(JSON.stringify(response)));
            
            
            resultArray.forEach((element, index, array) => {
                
                var fields = element.Management_IP.split('=');
                var newIP = fields[1].slice(0, -1);
                // console.log(newIP);
                element.Management_IP = newIP
            });
            
            // console.log(resultArray[0]);
            return resultArray;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = readDB;