import { upscMock01 } from './upscMock01';
import { upscMock02 } from './upscMock02';
import { upscMock07 } from './upscMock07';
import { upscMock08 } from './upscMock08';
import { upscMock09 } from './upscMock09';
import { upscMock10 } from './upscMock10';

// Single source of truth for papers that have complete question data.
export const upscSamplePapers = [
  upscMock01,
  upscMock02,
  { id: 'upsc-prelims-03', title: 'UPSC CSE Prelims — Mock 03', status: 'coming-soon', free: true },
  { id: 'upsc-prelims-04', title: 'UPSC CSE Prelims — Mock 04', status: 'coming-soon', free: true },
  { id: 'upsc-prelims-05', title: 'UPSC CSE Prelims — Mock 05', status: 'coming-soon', free: true },
  { id: 'upsc-prelims-06', title: 'UPSC CSE Prelims — Mock 06', status: 'coming-soon', free: true },
  upscMock07,
  upscMock08,
  upscMock09,
  upscMock10,
];
