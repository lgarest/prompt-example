// using prompt from https://github.com/flatiron/prompt
const prompt = require('prompt');

prompt.start();

const inputVars = ['username', 'email'];

// logs the captured username and email from the terminal
const logInput = (err, result) => {
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
}

// associate the input vars with its log input function
prompt.get(inputVars, logInput);

