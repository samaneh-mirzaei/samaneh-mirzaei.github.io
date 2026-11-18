import { PROJECTS } from './projects.js';
export const PROJECT_CATEGORIES = [
  { id:'ai', key:'projects.ai' },
  { id:'backend', key:'projects.backend' },
  { id:'frontend', key:'projects.frontend' },
  { id:'games', key:'projects.games' },
  { id:'desktop', key:'projects.desktop' },
];

// Use the same visual ordering for card numbers and spotlight selectors.
export const ORDERED_PROJECTS=PROJECT_CATEGORIES.flatMap(({id})=>PROJECTS.filter(project=>project.category===id));
