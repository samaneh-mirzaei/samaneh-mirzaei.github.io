// Only technologies already listed in skills.js, grouped for scanning.
import { SKILLS } from './skills.js';
const names=[
 ['languages',['Python','JavaScript','C++','GDScript','PHP']],
 ['frontend',['HTML','CSS','React','Laravel Blade']],
 ['backend',['Flask','FastAPI','SQL']],
 ['ai',['pandas','numpy','keras','PyTorch','TensorFlow','LangChain','RAG','Machine Learning','Deep Learning','llm','Computer Vision']],
 ['games',['Godot','Blender','Aseprite']],
 ['tools',['Tkinter','uv','pip','Git & GitHub']]
];
export const SKILL_GROUPS=names.map(([id,names])=>({id,items:SKILLS.filter(item=>typeof item==='string'?names.includes(item):id==='tools')}));
