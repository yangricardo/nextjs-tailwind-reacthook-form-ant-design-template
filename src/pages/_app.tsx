import { Layout } from '@/components/layout';
import { SampleApiClientProvider } from '@/hooks/sample-api/sample-api-client-hook';
import '@/styles/globals.css';
import '@/styles/antd.less';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SampleApiClientProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SampleApiClientProvider>
  );
}

export default MyApp;
