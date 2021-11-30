const chunkArray = (arr, length) => {
  //Init chunked arr
  const chunkedArr = [];

  //Loop through arr
  arr.forEach((val) => {
    //Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    //Check if last length is equal to chunk length
    if (!last || last.length === length) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
