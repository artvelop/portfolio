import React from 'react';
import {
  Wrapper,
  TyphoGraphy,
  PreviewImage,
  ChipItem,
} from 'components/common';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';

export const Project4: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <TyphoGraphy type="title" color={customColor.black}>
          웹 인터렉션 페이지
          <br /> BROSWER RENDERING PROCESS
        </TyphoGraphy>
      </Content>
      <ImageSlider>
        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/exhibition/render2.png" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/exhibition/render3.png" />
        </div>
      </ImageSlider>
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
            window.open('https://artvelop.github.io/crp-page/', '_blank')
          }>
          https://artvelop.github.io/crp-page/
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
          최근 리액트에서 많이 사용되는 애니메이션 라이브러리 framer을 이용하여
          <br />
          브라우저가 렌더링되는 과정을 한눈에 볼 수 있도록 인터렉션하게 표현한
          <br />
          인터렉티브 웹 페이지입니다
        </TyphoGraphy>
      </Content>
      <ChipContent>
        <ChipItem label="typescript" />
        <ChipItem label="react" />
        <ChipItem label="framer" />
      </ChipContent>
    </Wrapper>
  );
};

const ImageSlider = styled.div`
  margin-top: 32px;
`;

const Content = styled.div`
  margin-top: 16px;
`;

const ChipContent = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;
