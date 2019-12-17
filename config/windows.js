import Photo from "../src/components/dashboard/applications/Photo";
import Terminal from "../src/components/dashboard/applications/Terminal";
import Skills from "../src/components/dashboard/applications/Skills";
import Educations from "../src/components/dashboard/applications/Educations";

export default [
  {
    name: 'Photo',
    component: Photo,
    title: 'My photo',
    active: true,
    show: true,
    data: null,
    style: {minWidth: '600px', minHeight: '450px', width: '600px', height: '450px'}
  },
  {
    name: 'Terminal',
    component: Terminal,
    title: 'Terminal',
    active: true,
    show: true,
    data: null,
    style: {minWidth: '500px', minHeight: '300px', width: '500px', height: '300px'}
  },
  {
    name: 'Skills',
    component: Skills,
    title: 'My skills',
    active: true,
    show: true,
    data: null,
    style: {minWidth: '800px', minHeight: '850px', width: '800px', height: '850px'}
  },
  {
    name: 'Educations',
    component: Educations,
    title: 'My educations',
    active: true,
    show: true,
    data: null,
    style: {minWidth: '500px', minHeight: '400px', width: '500px', height: '400px'}
  },
];
