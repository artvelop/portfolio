import React from 'react';
import { Wrapper, TyphoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';

export const Project2: React.FC = () => {
  return (
    <Wrapper>
      <TyphoGraphy type="title" color={customColor.black}>
        PLAYAUTO - 프로모션 페이지 개발
      </TyphoGraphy>
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
              'https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/plto/plto.pdf',
              '_blank',
            )
          }>
          https://artvelop.s3.ap-northeast-2.amazonaws.com/profile/plto/plto.pdf
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
          onClick={() => window.open('https://plto.com/', '_blank')}>
          https://plto.com/
        </TyphoGraphy>
        <TyphoGraphy
          color={customColor.hashtag}
          pointer={true}
          onClick={() =>
            window.open('https://plto.com/affiliate/Affiliate/', '_blank')
          }>
          https://plto.com/affiliate/Affiliate/
        </TyphoGraphy>
        <TyphoGraphy
          color={customColor.hashtag}
          pointer={true}
          onClick={() =>
            window.open('https://plto.com/event/Event/', '_blank')
          }>
          https://plto.com/event/Event/
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
          마케팅 담당자가 이벤트 & 제휴관련 페이지를 백오피스에서 관리할 수 있고
          <br />
          진행중인 이벤트 & 제휴서비스를 사용자에게 보여줄 수 있도록 하는
          프로젝트입니다.
          <br />
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
          DB, 백엔드, 프론트까지 책임을 지고 구현을 하면서 기획자, 마케팅부서,
          디자이너와의 많은 소통을 통해
          <br />
          각 담당자들의 커뮤니케이션의 중요성을 많이 깨닫게 된 프로젝트입니다.
          <br />
          소통을 하면서 기획의도를 알아야 제가 개발을 하는데 수월하게 진행할 수
          있다는 저 자신을 발견할 수 있었고
          <br />
          1:1로 논의를 하더라도 그 논의를 통해 기획에 변화가 생긴다면 공론화를
          해야한다는 필요성을 많이 느낄 수 있었습니다
          <br />
          개발을 하는데 있어서는 기존에 구축된 환경에 기능을 추가하는 부분이었기
          때문에 크게 어려움은 없었지만
          <br />
          DB설계를 하면서 지향하기위해 DB관리자와 오버엔지니어링을 중점을 두고
          <br />
          논의를 했던 부분이 추후에 제가 DB를 다룰 때 좋은 경험이 되었습니다
        </TyphoGraphy>
      </Content>
    </Wrapper>
  );
};

const Content = styled.div`
  margin-top: 16px;
`;
