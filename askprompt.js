var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.stdoutMuted = true;

r1.question('Password: ', function(password){
	console.log('\nPassword is ' + password);
	r1.close();
});

r1.writeToOutput = function _writeToOutput(stringToWrite){
	if(r1.stdoutMuted)
		r1.output.write("*");
	else
		r1.output.write(stringToWrite);
};