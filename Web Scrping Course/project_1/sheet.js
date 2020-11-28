const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = class Sheet {
    constructor(){
        this.doc = new GoogleSpreadsheet(
            "1DgFlxycOKv583sCWb5uM84TYFMiCzPsKUV23A8G_hrg"
        );
    }
    async load(){
        await this.doc.useServiceAccountAuth(require("./credentials.json"));
        await this.doc.loadInfo(); 
    }
    async addRows(rows){
        const sheet = this.doc.sheetsByIndex[0];
        await sheet.addRows(rows);
    }
}
//Test code
// (async function() {
//     const sheet = new Sheet()
//     await sheet.load()
//     await sheet.addRows([
//         { title: 'New Job', location: 'MT' },
//         { title: 'Another New Job', location: 'ID' },
//     ])
// })()



