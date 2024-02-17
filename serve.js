const { exec } = require('child_process');
const path = require('path');

// Specify the Bundler executable path (if not in system PATH)
const bundlerExecutable = 'bundler';

// Specify the Jekyll serve command with Bundler
const jekyllServeCommand = `${bundlerExecutable} exec jekyll serve --trace --incremental`;

// Execute the Jekyll serve command
const child = exec(jekyllServeCommand, { cwd: path.resolve(__dirname) });

child.stdout.on('data', (data) => {
  console.log(data);
});

child.stderr.on('data', (data) => {
  console.error(data);
});

child.on('close', (code) => {
  console.log(`Jekyll process exited with code ${code}`);
});