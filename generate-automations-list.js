const fs = require('fs');
const path = require('path');

const workflowsDir = path.join(__dirname, 'src/js/data/workflows');
const outputFile = path.join(__dirname, 'src/js/data/automations-list.js');

const files = fs.readdirSync(workflowsDir)
  .filter(file => file.endsWith('.js'))
  .sort();

const workflowObjects = files.map(file => {
  const filePath = path.join(workflowsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove 'export default' and trailing semicolon
  content = content.replace(/export\s+default\s+/, '').replace(/;\s*$/, '');
  return content.trim();
});

const output = `window.automationsList = [\n${workflowObjects.map(obj => `  ${obj}`).join(',\n')}\n];\n`;

fs.writeFileSync(outputFile, output, 'utf8');
console.log(`Generated ${outputFile} with ${files.length} workflows (inlined).`); 