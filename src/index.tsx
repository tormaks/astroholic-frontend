// Include Telegram UI styles first to allow our code override the package CSS.
import '@telegram-apps/telegram-ui/dist/styles.css';

import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import ReactDOM from 'react-dom/client';

import { initializationApp } from '@/app/lib/initializationApp';
import { mockAppEnv } from '@/app/lib/mockAppEnv';
import { App } from '@/app/ui/App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  await mockAppEnv();

  const launchParams = retrieveLaunchParams();
  const { tgWebAppPlatform: platform } = launchParams;
  const debug = (launchParams.tgWebAppStartParam || '').includes('platformer_debug')
    || import.meta.env.DEV;

  await initializationApp({
    debug,
    eruda: debug && ['ios', 'android'].includes(platform),
    mockForMacOS: platform === 'macos',
  })
    .then(() => {
      root.render(
        <StrictMode>
          <App />
        </StrictMode>,
      );
    });
} catch (e) {
  console.log(e);
  root.render(<div>EnvUnsupported...</div>);
}
