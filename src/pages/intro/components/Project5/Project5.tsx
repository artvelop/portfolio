import React from 'react';
import {
  Wrapper,
  TyphoGraphy,
  PreviewImage,
  ChipItem,
} from 'components/common';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';

export const Project5: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <TyphoGraphy type="title" color={customColor.black}>
          한 줄 기록
        </TyphoGraphy>
      </Content>
      <ImageSlider>
        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center' }}>
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/onelinediary/IOS5.5-1.jpg" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/onelinediary/IOS5.5-2.jpg" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/onelinediary/IOS5.5-3.jpg" />
          <PreviewImage url="https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/onelinediary/IOS5.5-4.jpg" />
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
            window.open(
              'https://play.google.com/store/apps/details?id=com.onelinediary',
              '_blank',
            )
          }>
          ANDROID 플레이스토어
        </TyphoGraphy>

        <TyphoGraphy
          color={customColor.hashtag}
          pointer={true}
          onClick={() =>
            window.open(
              'https://apps.apple.com/kr/app/%ED%95%9C-%EC%A4%84-%EA%B8%B0%EB%A1%9D/id1609388116',
              '_blank',
            )
          }>
          IOS 앱스토어
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
          일기를 써야겠다고는 생각하지만 귀찮음 혹은 시간문제로
          <br />
          일기를 쓰지 못하는 사람들이
          <br />
          간단하게라도 쓸 수 있도록 만든 앱입니다
        </TyphoGraphy>
      </Content>
      <ChipContent>
        <ChipItem label="typescript" />
        <ChipItem label="react-native" />
        <ChipItem label="serverless" />
        <ChipItem label="aws-s3" />
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
