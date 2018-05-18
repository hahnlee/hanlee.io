export interface ITalk {
  at: string,
  title: string,
  slide: string,
  video?: string,
};

export interface ITalkData {
  version: number,
  data: ITalk[],
};

export const TalkData: ITalkData = {
  version: 20171225,
  data: [
    {
      'at': 'PyCon KR 2017',
      'title': 'ipytracer 개발기',
      'slide': '',
      'video': '',
    },
    {
      'at': '스타트업 테크 챌린지 (PeopleFund)',
      'title': '프론트엔드 개발자를 위한 LayerModel',
      'slide': '',
    },
    {
      'at': 'NAVER D2',
      'title': '오픈소스 첫걸음',
      'slide': '',
    },
  ],
};
