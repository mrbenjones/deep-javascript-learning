/**
 * Take a function that matches adjacent records, and another that merges subsequent records into the current record,
 * and generate function that takes an iterable of records and returns the merged records.
 *
 */
const matchMerger = function (match, merge) {
   return function(rows) {
       return rows.reduce(
           function(previous, newest) {
               if (match(previous[previous.length-1], newest)) {
                   return previous.slice(0,previous.length-1).concat(merge(previous[previous.length-1], newest))
               } else {
                   return previous.concat(newest)
               }
           }, []
       )
   }
}

const buff = function (x) {
    return x*x
}
module.exports = {matchMerger, buff}