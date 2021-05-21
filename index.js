const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map( sentence => {
      const splitSentences = sentence.split(' ');
    // split each line using .split(' ');
    // set equal to a constant
      const capSentences = 
          splitSentences.map( sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1));
      const response = capSentences.join(" ");
      return response;


    // take constant and call map on it
    // map's arguments are for each first character of each word uppercase it and replace it using slice.
    // set constant equal to above

    // use .join(' ') and call on altered collection

    //return collection
  });
}
