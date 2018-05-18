export interface IProjectInfo {
  name: string,
  description: string,
  titleImg: string,
  stack: string[],
};

export interface IProjectData {
  version: number,
  data: IProjectInfo[],
};

export const ProjectData: IProjectData = {
  version: 20171221,
  data: [
    {
      name: 'ipytracer',
      description: '📊 Algorithm Visualizer for IPython/Jupyter Notebook',
      titleImg: 'ipytracer.png',
      stack: [
        'python',
      ],
    },
    {
      name: 'vimrc.io',
      description: '✍️ Create useful .vimrc file for your vim editor',
      titleImg: 'vimrc.png',
      stack: [
        'react',
        'redux',
      ],
    },
    {
      name: 'Throne',
      description: '👑 Throne for Realm mobile database. Realm browser made with electron',
      titleImg: 'throne.png',
      stack: [
        'react',
        'redux',
        'electron',
        'realm',
      ],
    },
    {
      name: 'Naju Bus Android',
      description: '🚌 Bus App write in Kotlin, Rx and Realm',
      titleImg: 'naju-bus.png',
      stack: [
        'android',
        'kotlin',
        'rx',
        'realm',
      ],
    },
  ],
}