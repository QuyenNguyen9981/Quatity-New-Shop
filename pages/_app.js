import { SessionProvider, getSession } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from 'react-redux';
import { store } from '@/store/store';

import { ToastContainer } from 'react-toastify';
import { MainLayout } from '@/layout';
import { useState } from 'react';
import { config } from './api/[...path]';

// Create a client
// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnWindowFocus: false,
//             retry: false,
//         },
//     },
// });

function MyApp(props) {
    const { Component, pageProps, session, settings } = props;
    const [queryClient] = useState(() => new QueryClient(config));
    // const Layout = Component.Layout ?? MainLayout;
    // Use the layout defined at the page level, if available
    const renderWithLayout =
        Component.getLayout ||
        function (page) {
            return <MainLayout>{page}</MainLayout>;
        };

    const handleExitComplete = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
        }
    };

    return (
        <>
            <Head>
                <title>QN-Shop</title>

                {/* <!-- Primary Meta Tags --> */}

                <meta name="title" content="QNShop" />
                <meta name="description" content="QNShop" />

                {/* <!-- Open Graph / Facebook --> */}
                {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.samsungtvtheserif.com/damchattoi" />
        <meta property="og:title" content="Cuộc thi thiết kế | Tinh tế không gian - Đậm chất tôi" />
        <meta property="og:description" content="Nơi bạn thỏa sức sáng tạo cá tính không gian riêng mình. Nơi mà CHẤT TÔI của bạn sẽ được tỏa sáng cùng Samsung TV The Serif" />
        <meta property="og:image" content="https://www.samsungtvtheserif.com/_next/image?url=%2Fimages%2Fbanner.png&w=1920&q=75" /> */}

                {/* <!-- Twitter --> */}
                {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.samsungtvtheserif.com/damchattoi" />
        <meta property="twitter:title" content="Cuộc thi thiết kế | Tinh tế không gian - Đậm chất tôi" />
        <meta property="twitter:description" content="Nơi bạn thỏa sức sáng tạo cá tính không gian riêng mình. Nơi mà CHẤT TÔI của bạn sẽ được tỏa sáng cùng Samsung TV The Serif" />
        <meta property="twitter:image" content="https://www.samsungtvtheserif.com/_next/image?url=%2Fimages%2Fbanner.png&w=1920&q=75" /> */}

                {/* <meta property="og:image" content="" alt="cover" /> */}
                <link rel="icon" href="/faviconCustom.ico"></link>
            </Head>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <SessionProvider session={session}>
                        <Provider store={store}>
                            <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
                                <ToastContainer
                                    theme="light"
                                    position="top-right"
                                    autoClose={3000}
                                    closeOnClick
                                    pauseOnHover={false}
                                />
                                {renderWithLayout(<Component {...pageProps} />)}
                            </AnimatePresence>
                        </Provider>
                    </SessionProvider>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
