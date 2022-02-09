import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import wrapper from 'store/configureStore';
import { getUser } from 'store/reducer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme_ = createTheme(
  {},
  {
    customTheme: {
      defaultMode: {
        headerMenuBackgroundColor: '#8946A6',
        footerMenuBackgroundColor: '#8946A6',
        inCardRoungeColor: '#4C78C1',
        swiperSlideTextColor: 'rgba(200, 200, 200, 0.75)',
        cardWrapperBackgroundColor: 'white',
        topicWrapperBackgroundColor: '#8946A6',
        topicWrapperTextColor: 'black',
        footerIconColor: 'white',
        footerWriteIconBackgroundColor: '#9165e2',
        searchInputBackgroundColor: 'white',
        searchInputTextColor: 'black',
        searchPageWrapperBackgroundColor: '#EAEAEA',
        searchWrapperBorderBottomColor: '#EAEAEA',
        footerBordertopColor: '#EAEAEA',
        thumbUpIconNotLiked: '',
        thumbUpIconLiked: 'rgb(144, 202, 249)',
      },
      darkMode: {
        headerMenuBackgroundColor: 'rgba(28, 28, 30, 1)',
        footerMenuBackgroundColor: 'rgba(28, 28, 30, 1)',
        inCardRoungeColor: '#4C78C1',
        swiperSlideTextColor: 'rgba(93, 93, 95, 0.9)',
        cardWrapperBackgroundColor: 'rgba(28, 28, 30, 1)',
        topicWrapperBackgroundColor: 'rgba(35, 35, 37, 1)',
        topicWrapperTextColor: 'rgba(213,213,215,0.85)',
        footerIconColor: 'rgb(145, 145, 146)',
        footerWriteIconBackgroundColor: 'rgba(219,50,57,1)',
        searchInputBackgroundColor: 'rgb(39, 39, 41)',
        searchInputTextColor: 'rgb(149, 149, 151)',
        searchPageWrapperBackgroundColor: 'rgba(28, 28, 30, 1)',
        searchWrapperBorderBottomColor: 'rgb(17, 17, 19)',
        footerBordertopColor: 'rgb(17, 17, 19)',
        thumbUpIconNotLiked: '',
        thumbUpIconLiked: '',
      },
    },
  },
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme_}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }: AppContext): Promise<any> =>
      await store.dispatch(getUser()),
);
export default wrapper.withRedux(MyApp);
