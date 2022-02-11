import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import HeaderHome from '@components/Headers/Home';
import HeaderSkeleton from '@components/Headers/Skeleton';
import HeaderChatting from '@components/Headers/Chatting';

const Header: React.FC = () => {
  const router = useRouter();
  const headerKey = router.pathname.split('/')[1];
  return (
    <HeaderWrapperDivStyled>
      {headerKey === 'list' && <HeaderHome />}
      {headerKey === 'chatting' && <HeaderChatting />}
      {/* {headerKey === 'notification' && <HeaderNotification />} */}
      {/* {headerKey === 'mypage' && <HeaderMyPage />} */}
      {headerKey === '' && <HeaderSkeleton />}
    </HeaderWrapperDivStyled>
  );
};
export default Header;
export const HeaderWrapperDivStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
`;
