const { exec } = require('child_process');
const path = require('path');

// Specify the Bundler executable path (if not in system PATH)
const bundlerExecutable = 'bundler';

// Specify the path to the Gemfile
const gemfilePath = path.resolve(__dirname, 'docs', 'Gemfile');

// Specify the command to install dependencies
const installCommand = `${bundlerExecutable} install --gemfile="${gemfilePath}"`;

// Specify the command to run Jekyll serve
const jekyllServeCommand = `${bundlerExecutable} exec jekyll serve`;

// Execute the command to install dependencies
const installChild = exec(installCommand, { cwd: path.resolve(__dirname, 'docs') });

installChild.stdout.on('data', (data) => {
  console.log(data);
});

installChild.stderr.on('data', (data) => {
  console.error(data);
});

installChild.on('close', (code) => {
  if (code === 0) {
    console.log('Dependencies installed successfully.');

    // Execute the Jekyll serve command if installation succeeds
    const serveChild = exec(jekyllServeCommand, { cwd: path.resolve(__dirname, 'docs') });

    serveChild.stdout.on('data', (data) => {
      console.log(data);
    });

    serveChild.stderr.on('data', (data) => {
      console.error(data);
    });

    serveChild.on('close', (serveCode) => {
      console.log(`Jekyll process exited with code ${serveCode}`);
    });
  } else {
    console.error('Failed to install dependencies.');
  }
});