export interface IOutLink {
  logo: string,
  link: string,
};

export interface IAboutData {
  version: number,
  location: string,
  outLinks: IOutLink[],
};

export const AboutData: IAboutData = {
  version: 20171228,
  outLinks: [
    {
      logo: 'github',
      link: 'https://github.com/sn0wle0pard',
    },
    {
      'logo': 'linkedin',
      'link': 'https://www.linkedin.com/in/sn0wle0pard/',
    },
    {
      logo: 'facebook',
      link: 'https://www.facebook.com/dev.sn0wle0pard',
    },
    {
      logo: 'feather',
      link: 'https://blog.sn0wle0pard.io/',
    },
    {
      logo: 'mail',
      link: 'mailto:hanlee.dev@gmail.com',
    },
    {
      logo: 'resume',
      link: [
        'https://drive.google.com/file/d/',
        '1YG7sYJuGcm7Dp_43efZcgzQ5j9ik9gMH/view?usp=sharing',
      ].join(''),
    }
  ],
  location: 'Ulsan, South Korea',
};
