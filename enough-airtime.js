function enoughAirtime(projectedUsage, airtimeBalance) {//
  var airtimeUsage = projectedUsage.split(",");
  let total = 0;
  for (let i = 0; i< airtimeUsage.length; i++) {
    if (airtimeUsage[i].startsWith("call")) {
      total = total +1.88;
    }
    else if (airtimeUsage[i].startsWith("data")) {
      total = total +12;
    }
    else if (airtimeUsage[i].startsWith("sms")) {
      total = total +0.75;
    }
  }
  const result = (total>airtimeBalance) ? 0.0 : airtimeBalance - total;
  return 'R'+ result.toFixed(2);
}