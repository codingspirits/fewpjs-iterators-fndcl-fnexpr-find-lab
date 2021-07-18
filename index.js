const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"},
    {year: "1555", result: "W"}
]

//console.log(record[1].result)
//console.log(record.length)
for (i=0; i<record.length; i++) {
    if (record[i].result =='W'){
        console.log(record[i].year);
        break;
    }
}
/*

const superbowlWin= function(record){
    let result = record.find(
        function(record) {
            record.result === "W"})
    console.log(!!result ? result.year : undefined)
}/*/


/*superbowlWin = (record) => {
    let result = record.find( record => record.result === "W" )
    return !!result ? result.year : undefined
  }