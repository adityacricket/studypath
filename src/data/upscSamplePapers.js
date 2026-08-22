import { upscMock07 } from './upscMock07';
import { upscMock08 } from './upscMock08';
import { upscMock09 } from './upscMock09';
import { upscMock10 } from './upscMock10';

// Registry for the UPSC Sample Papers section.
// Mocks 01–06 can be added to this registry from their existing data modules.
export const upscSamplePapers = [
  { id: 'upsc-prelims-01', title: 'UPSC CSE Prelims — Mock 01', status: 'ready' },
  { id: 'upsc-prelims-02', title: 'UPSC CSE Prelims — Mock 02', status: 'ready' },
  { id: 'upsc-prelims-03', title: 'UPSC CSE Prelims — Mock 03', status: 'ready' },
  { id: 'upsc-prelims-04', title: 'UPSC CSE Prelims — Mock 04', status: 'ready' },
  { id: 'upsc-prelims-05', title: 'UPSC CSE Prelims — Mock 05', status: 'ready' },
  { id: 'upsc-prelims-06', title: 'UPSC CSE Prelims — Mock 06', status: 'ready' },
  upscMock07,
  upscMock08,
  upscMock09,
  upscMock10,
];
