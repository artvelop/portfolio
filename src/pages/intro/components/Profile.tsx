import React from 'react';
import styled from '@emotion/styled';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTag,
} from 'react-icons/ai';
import { TyphoGraphy } from 'components/common';
import { customColor, profile } from 'constants/index';
import { Description } from '.';

export const Profile = () => {
  return (
    <Wrapper>
      <FlexBox>
        <LeftBox>
          <ProfileImage />
          <NameBox>
            <TyphoGraphy type="body1" color={customColor.white}>
              {profile.name}
            </TyphoGraphy>
          </NameBox>
        </LeftBox>
        <RightBox>
          <TyphoGraphy type="title" color={customColor.gray}>
            JUNIOR DEVELOPER
          </TyphoGraphy>
          <DescriptionForm>
            <Description
              icon={<AiOutlinePhone size="36px" />}
              text={profile.phone}
            />
            <Description
              icon={<AiOutlineMail size="36px" />}
              text={profile.mail}
            />
            <Description
              icon={<AiOutlineGithub size="36px" />}
              text={profile.github}
            />
            <Description
              icon={<AiOutlineTag size="36px" />}
              text={profile.birthDay}
            />
          </DescriptionForm>
        </RightBox>
      </FlexBox>
    </Wrapper>
  );
};

const DescriptionForm = styled.div`
  margin-top: 24px;
`;

const RightBox = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 16px;
`;

const LeftBox = styled.div`
  margin-right: 16px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const NameBox = styled.div`
  background-color: ${customColor.gray};
  border-radius: 4px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.div`
  border-radius: 4px;
  width: 256px;
  height: 256px;
  background-image: url(${profile.img});
  background-size: cover;
`;

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${customColor.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
