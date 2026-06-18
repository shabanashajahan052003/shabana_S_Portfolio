const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'app', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') && f !== 'FramerMotionProvider.tsx');

function replaceMotion(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const replacements = [
    { from: 'import { motion } from "framer-motion";', to: 'import { m as motion } from "framer-motion";' },
    { from: 'import { motion, AnimatePresence } from "framer-motion";', to: 'import { m as motion, AnimatePresence } from "framer-motion";' },
    { from: 'import { motion, type Transition } from "framer-motion";', to: 'import { m as motion, type Transition } from "framer-motion";' }
  ];

  for (const rep of replacements) {
    if (content.includes(rep.from)) {
      content = content.split(rep.from).join(rep.to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

files.forEach(file => replaceMotion(path.join(componentsDir, file)));

const uiDir = path.join(componentsDir, 'ui');
if (fs.existsSync(uiDir)) {
  const uiFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx'));
  uiFiles.forEach(file => replaceMotion(path.join(uiDir, file)));
}
