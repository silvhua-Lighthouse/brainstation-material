function getCurrentTimestamp() {
  var date = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  var dateTime = new Date(date);
  var year = dateTime.getFullYear();
  var month = String(dateTime.getMonth() + 1).padStart(2, "0");
  var day = String(dateTime.getDate()).padStart(2, "0");
  var hours = String(dateTime.getHours()).padStart(2, "0");
  var minutes = String(dateTime.getMinutes()).padStart(2, "0");
  var formattedTimestamp = year + "-" + month + "-" + day + "_" + hours + minutes;
  return formattedTimestamp;
}

console.log(getCurrentTimestamp())