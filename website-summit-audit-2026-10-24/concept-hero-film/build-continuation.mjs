import {readFile,writeFile} from 'node:fs/promises';
const page=new URL('./index.html',import.meta.url),fragment=new URL('./page-continuation.html',import.meta.url);
const html=await readFile(page,'utf8'),tail=await readFile(fragment,'utf8');
const start=html.indexOf('  <section id="possibilities"'),end=html.indexOf('<div class="brand-opening"');
if(start<0||end<=start)throw new Error('Continuation boundaries missing; refusing to replace the page.');
let output=html.slice(0,start)+tail+'\n'+html.slice(end);
if(!output.includes('href="completion.css"'))output=output.replace('</head>','  <link rel="stylesheet" href="completion.css"><script type="module" src="completion.js"></script>\n</head>');
await writeFile(page,output);
console.log('Continuation built; earlier chapters and opening preserved.');
