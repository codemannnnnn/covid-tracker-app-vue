

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "1DgFlxycOKv583sCWb5uM84TYFMiCzPsKUV23A8G_hrg"
);

(async function(){


  console.log(doc.title);
  await doc.updateProperties({ title: "New Jobs" });




})()

