import React from 'react';
import {
  Wrapper,
  TyphoGraphy,
  PreviewImage,
  ChipItem,
} from 'components/common';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';

export const Project1: React.FC = () => {
  return (
    <Wrapper>
      <TyphoGraphy type="title" color={customColor.black}>
        내친구 밸런스 게임
      </TyphoGraphy>
      <ImageSlider>
        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/fdbg/fdbg-introduce1.png" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/fdbg/fdbg-introduce2.png" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/fdbg/fdbg-introduce3.png" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/fdbg/fdbg-introduce4.png" />
        </div>
      </ImageSlider>
      <Content>
        <TyphoGraphy
          type="h2"
          color={customColor.black}
          fontHeight="48px"
          fontWeight="800">
          아키텍처 & 인프라
        </TyphoGraphy>
        <TyphoGraphy
          color={customColor.hashtag}
          pointer={true}
          onClick={() =>
            window.open(
              'https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/fdbg/fdbg.png',
              '_blank',
            )
          }>
          https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/fdbg/fdbg.png
        </TyphoGraphy>
      </Content>
      <Content>
        <TyphoGraphy
          type="h2"
          color={customColor.black}
          fontHeight="48px"
          fontWeight="800">
          링크
        </TyphoGraphy>
        <TyphoGraphy
          color={customColor.hashtag}
          pointer={true}
          onClick={() =>
            window.open(
              'https://play.google.com/store/apps/details?id=com.fdbg&hl=KR&gl=KR',
              '_blank',
            )
          }>
          https://play.google.com/store/apps/details?id=com.fdbg&hl=KR&gl=KR
        </TyphoGraphy>
        <TyphoGraphy
          color={customColor.hashtag}
          pointer={true}
          fontHeight="32px"
          onClick={() =>
            window.open(
              'https://artvelop.notion.site/ef7b2ac3bb29411dbffa8350f7db3854?v=9a4b91c2de6346628d5b530dab494284',
              '_blank',
            )
          }>
          이슈관리내역보기
        </TyphoGraphy>
      </Content>
      <Content>
        <TyphoGraphy
          type="h2"
          color={customColor.black}
          fontHeight="48px"
          fontWeight="800">
          프로젝트 소개
        </TyphoGraphy>
        <TyphoGraphy type="h4" color={customColor.black} fontHeight="24px">
          본인 스마트폰의 연락처에 저장된 친구들의 이름들을 가져와
          <br />
          질문을 통해 놓이는 상황에 대하여 더 나은 친구를 선택하는 일종의
          가상대결 게임입니다.
          <br />
          유튜브에서 많은 인플루언서들이 밸런스게임을 자주하는 것을 보고 영감을
          얻었고
          <br />
          자신의 친구들을 대상으로 밸런스게임을 진행하면 재밌을 것 같다는 생각에
          만들게 되었습니다
        </TyphoGraphy>
      </Content>

      <Content>
        <TyphoGraphy
          type="h2"
          color={customColor.black}
          fontHeight="48px"
          fontWeight="800">
          느꼈던 점
        </TyphoGraphy>
        <TyphoGraphy type="h4" color={customColor.black} fontHeight="24px">
          일단 react-native는 자체적으로 기능을 제공하는게 많지 않아 라이브러리
          또는 직접구현 해야하는 부분이 많다는 점에 불편함을 느꼈습니다.
          <br />
          또한 각 라이브러리 간의 버전호환문제도 많아서 네이티브에 대한 지식이
          필수라고 느꼈던 것 같습니다
          <br />
          한가지 더 느낀점은 개인서버의 트래픽을 줄이기 위해 사용자 데이터를
          왠만해선 클라이언트 단에서 관리하려고 노력을 했었는데
          <br />
          그 과정에서 렌더링 최적화와 어떻게 상태관리를 하느냐에 따라
          클라이언트의 성능이 좌우되는지를 체감했던 것이 인상깊게 기억에
          남습니다
          <br />
          <br />
        </TyphoGraphy>
        <TyphoGraphy type="h4" color={customColor.black} fontHeight="24px">
          Backend의 경우에는 서버비용을 줄이는데 집중하고자 serverless를
          사용해서 개발을 했는데
          <br />
          전부터 관심있게 보던 nosql dynamoDB를 통해서 데이터를 저장하여
          관리하였습니다
          <br />
          대규모의 유저들이 몰릴만한 프로젝트는 아니라고 생각하기 때문에
          dynamoDB가 비용절감에도 굉장히 도움이 많이 되었고
          <br />
          유저 인증을 관리해주는 cognito와 엔드포인트를 관리해주는 api gateway를
          도입해보면서 서버리스하게 개발하더라도
          <br />
          서버를 편하게 관리할 수 있도록 인프라를 구축하는 것이 가능하다는 것을
          알게되었습니다.
        </TyphoGraphy>
      </Content>
      <ChipContent>
        <ChipItem label="typescript" />
        <ChipItem label="react-native" />
        <ChipItem label="DynamoDB" />
        <ChipItem label="serverless" />
        <ChipItem label="lambda" />
        <ChipItem label="api-gateway" />
        <ChipItem label="cognito" />
        <ChipItem label="cloudWatch" />
      </ChipContent>
    </Wrapper>
  );
};

const ImageSlider = styled.div`
  margin-top: 40px;
`;

const Content = styled.div`
  margin-top: 16px;
`;

const ChipContent = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;
