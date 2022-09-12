const processCommasForCSV = (val) => {
  if (val.includes(",")) {
    return '"' + val + '"';
  } else {
    return val;
  }
};

console.log(processCommasForCSV("sfsdfhn,bsdafd,bfvsd"));
