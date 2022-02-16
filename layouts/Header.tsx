import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import HeaderHome from '@components/Headers/Home';
import HeaderSkeleton from '@components/Headers/Skeleton';
import Chatting from '@components/Headers/Chatting';
import TestHeader from './TestHeader';

const Header: React.FC = () => {
  const router = useRouter();
  const headerKey = router.pathname.split('/')[1];
  const topic = router.query.topic as string;

  return (
    <HeaderWrapperDivStyled>
      {topic !== undefined && <TestHeader title={topic} />}
      {headerKey === 'notification' && <TestHeader title={'알림페이지'} />}
      {headerKey === 'list' && topic == undefined && <HeaderHome />}
      {headerKey === 'chat' && <Chatting />}
      {headerKey === 'mypage' && <TestHeader title={'마이페이지'} />}
    </HeaderWrapperDivStyled>
  );
};
export default Header;
export const HeaderWrapperDivStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  top: 0;
`;
