const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../src/js/data/automations-list.js');
const outputDir = path.join(__dirname, '../src/js/data/workflows');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const fileContent = fs.readFileSync(inputPath, 'utf8');
const match = fileContent.match(/window\.automationsList\s*=\s*\[(.*)\];/s);
if (!match) {
  console.error('Could not find automationsList array in file.');
  process.exit(1);
}

const workflowsRaw = `[${match[1]}]`;
let workflows;
try {
  workflows = eval(workflowsRaw); // Only safe if you trust the file content
} catch (e) {
  console.error('Failed to parse workflows:', e);
  process.exit(1);
}

const importLines = [];
const exportNames = [];

workflows.forEach((workflow, i) => {
  const id = workflow.id || `workflow_${i}`;
  const fileName = `${id}.js`;
  const exportName = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(
    filePath,
    'export default ' + JSON.stringify(workflow, null, 2) + ';\n'
  );
  importLines.push(`import ${exportName} from './workflows/${fileName}';`);
  exportNames.push(exportName);
});

console.log('// Imports for new automations-list.js');
importLines.forEach(line => console.log(line));
console.log('\nwindow.automationsList = [');
exportNames.forEach(name => console.log('  ' + name + ','));
console.log('];'); 