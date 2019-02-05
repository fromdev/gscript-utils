/**
 * Just read the first column, expects A notation to be only for one column.
**/
function ReadColumnFromSheet(sourceSheet,columnANotation) {
  var range = sourceSheet.getRange(columnANotation);
  var values = range.getValues();
  var columnValues = [];
  if(range) {
    for(var r =0; r < values.length; r++) {
      if(values[r][0] && values[r][0].length > 4) {
        columnValues.push(values[r][0]);
      }
    }
  }
  return columnValues;
}

/**
 * Delete all valuesToDelete from the column
 **/
function DeleteValuesFromSheet(sourceSheet,columnANotation, valuesToDelete) {
  if(!sourceSheet || !valuesToDelete || !columnANotation) {
    Logger.log("Missing required information to delete " + values);
    return;
  }
  var range = sourceSheet.getRange(columnANotation);
  var values = range.getValues();
  var columnValues = [];
  if(range) {
    var columnPart = columnANotation.split(":")[0];
    for(var r =0; r < values.length; r++) {
      var thisVal = values[r][0];
      if(thisVal && ArrayHasValue(valuesToDelete,thisVal)) {
        Logger.log("Found value " + thisVal);
        try {
          var rng = sourceSheet.getRange(columnPart+(r+1));
          var lastValue = rng.getValue();
          rng.clearContent();
          Logger.log("Set to empty [" + lastValue + "] Found for [" + thisVal + "]");
        } catch(e) {
          Logger.log("Error setting: cell " + r + " "  + e.message);
        }
      }
    }
  }
}
