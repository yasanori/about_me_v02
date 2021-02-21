import React from 'react'
import { SubTitle, MiniTitle } from '../Styles/Text'
import { AboutMePageWrapper, ProfileWrapper, Profiles, ProfileLists, ProfileList } from '../Styles/Pages/AboutMe'

const AboutMe = () => {
  return (
    <AboutMePageWrapper>
      <SubTitle>
        about me
    </SubTitle>
      <ProfileWrapper>
        <MiniTitle>
          Profile
        </MiniTitle>
        <Profiles>
          <ProfileLists>
            <ProfileList>
              名前　　　:　永尾 優典
            </ProfileList>
            <ProfileList>
              生年月日　:　1995-06-18
            </ProfileList>
            <ProfileList>
              所在地　　:　東京都内
            </ProfileList>
            <ProfileList>
              お問い合わせ:　msnr.nagao@gmail.com
            </ProfileList>
            <ProfileList>
              スキル：　　<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Ruby&nbsp;/&nbsp;Ruby on Rails<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              JavaScript&nbsp;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              React&nbsp;/&nbsp;Redux<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              HTML5&nbsp;/&nbsp;CSS3<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              デザイン&nbsp;/&nbsp;フォトグラフ<br />
            </ProfileList>
          </ProfileLists>
          <ProfileLists>
            <ProfileList>
              name　 : Masanori Nagao
            </ProfileList>
            <ProfileList>
              birthday: 1995-06-18
            </ProfileList>
            <ProfileList>
              location : Tokyo, Japan
            </ProfileList>
            <ProfileList>
              mail :　msnr.nagao@gmail.com
            </ProfileList>
            <ProfileList>
              skill：　　<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Ruby&nbsp;/&nbsp;Ruby on Rails<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              JavaScript&nbsp;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              React&nbsp;/&nbsp;Redux<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              HTML5&nbsp;/&nbsp;CSS3<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              design&nbsp;/&nbsp;photograph<br />
            </ProfileList>
          </ProfileLists>
        </Profiles>
      </ProfileWrapper>
    </AboutMePageWrapper>
  )
}

export default AboutMe
