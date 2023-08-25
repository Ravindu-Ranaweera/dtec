const exportUsersToExcel = require('./exportService');
let instance = null;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


class exportDB {

    static getTableInstance() {
        return instance ? instance : new exportDB();
    }

    async setTable(arr) {

        try {
            const workSheetColumnName  = [];
            for (const [key, value] of Object.entries(arr[0])) {
                workSheetColumnName.push(key);
            }
            // console.log(workSheetColumnName);
            // console.log(arr);

            const workSheetName = 'ESXI Host List';
            const filePath = './outputFiles/excel-from-js.xlsx';

            exportUsersToExcel(arr, workSheetColumnName, workSheetName, filePath);
            return 0;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = exportDB;