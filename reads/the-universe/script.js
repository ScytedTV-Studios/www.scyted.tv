// Function to load and display the text file
function loadTxtFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            const formattedText = formatText(text);
            document.getElementById('story-content').innerHTML = formattedText;
        })
        .catch(error => console.error('Error:', error));
}

// Function to format the text with markdown-like styling and line breaks
function formatText(text) {
    // Replace headers (e.g., # Header)
    text = text.replace(/^# (.*$)/mg, '<h1>$1</h1>');
    text = text.replace(/^## (.*$)/mg, '<h2>$1</h2>');
    text = text.replace(/^### (.*$)/mg, '<h3>$1</h3>');

    // Replace lists (e.g., - List item)
    text = text.replace(/^\s*-\s(.*)$/mg, '<li>$1</li>');
    text = text.replace(/^\s*1\.\s(.*)$/mg, '<li>$1</li>');

    // Replace bold (e.g., **Bold**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace italics (e.g., *Italic*)
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Replace inline code (e.g., `code`)
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');

    // Replace line breaks
    text = text.replace(/\n/g, '<br>');

    return text;
}

// Call the function with the path to your text file
loadTxtFile('story.txt');