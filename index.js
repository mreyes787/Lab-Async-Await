const fs = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;
  
  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  const poem1 =  await readFileAsync("poems/starting-poem.txt", "utf-8");
  const poem2Filename = `poems/${mostFrequentWord(poem1)}.txt`;
  console.log(poem2Filename);
  const poem2 =  await readFileAsync(poem2Filename, "utf-8");
  const poem3Filename = `poems/${mostFrequentWord(poem2)}.txt`;
  //console.log(poem3Filename);
  const poem3 =  await readFileAsync(poem3Filename, "utf-8");
  const poem4Filename = mostFrequentWord(poem3);
  console.log(poem4Filename);

  //const poem2 = await readFileAsync("poems/happy.txt", "utf-8" );
  //const poem3 = await readFileAsync("poems/you.txt", "utf-8" );
  // mostFrequentWord(poem3);
  // console.log(mostFrequentWord(poem3));

//this is the other way 
  
  //const poem2 = await readFileAsync("poems/happy.txt", "utf-8");
  
  // console.log(poem3);

  
}

findPassword();
