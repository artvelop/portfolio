import React from 'react';
import {
  Wrapper,
  TyphoGraphy,
  PreviewImage,
  ChipItem,
} from 'components/common';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';

export const Project3: React.FC = () => {
  return (
    <Wrapper>
      <TyphoGraphy type="title" color={customColor.black}>
        IWONDER - 자기소개 웹 플랫폼
      </TyphoGraphy>
      <ImageSlider>
        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
          <PreviewImage
            height="340px"
            url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/iwonder/iwonder_pc.png"
          />
          <PreviewImage
            height="340px"
            url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/iwonder/iwonder_mobile.png"
          />
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
              'https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/iwonder/iwonder.png',
              '_blank',
            )
          }>
          https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/iwonder/iwonder.png
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
          onClick={() => window.open('https://www.iwonder.link/', '_blank')}>
          https://www.iwonder.link/
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
          자신이 어떤 사람인지 남들에게 공유할 수 있게 해주는
          <br />
          컨텐츠들이 모인 웹 플랫폼 입니다
          <br />
          태블릿PC는 아직 미지원 상태이며 PC환경과 모바일 환경에서만 지원됩니다
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
          rollingpaper.site를 카톡오픈채팅 하는 사람들이 많이 프로필에 공유하는
          것을 보면서
          <br />
          웹을 통해 자신을 재밌게 소개하는걸 공유하는 플랫폼을 만들고 싶었습니다
          <br />
          seo최적화의 가능성을 열어두고 next.js를 사용하여 만들었고
          <br />
          그동안 공부했던 serverless를 프로덕션에 적용해보면서 트래픽에 따라
          적은 비용으로 서버를 운영할 수 있다는 점에서
          <br />
          serverless의 장점을 체감할 수 있었던 것 같습니다.
          <br />
          수익구조를 kakao adfit을 사용하여 광고수익으로 채택을 했는데
          <br />
          어떻게 하면 사용자 수를 늘릴까하고 고민을 하는 과정에서
          <br />
          기획자, 디자이너, 마케터 등 비전공자의 입장을 좀 더 이해할 수 있게
          되었습니다
        </TyphoGraphy>
      </Content>
      <ChipContent>
        <ChipItem label="typescript" />
        <ChipItem label="mysql" />
        <ChipItem label="next.js" />
        <ChipItem label="serverless" />
        <ChipItem label="aws-s3" />
        <ChipItem label="cloudwatch" />
        <ChipItem label="api-gateway" />
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
