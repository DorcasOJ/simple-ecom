import { GluestackUIProvider as BaseProvider } from '@gluestack-ui/themed';
import React from 'react';

import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { ViewProps } from 'react-native';
import { config } from './config';

export type ModeType = 'light' | 'dark' | 'system';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  // const { colorScheme, setColorScheme } = useColorScheme();
  const [colorMode, setColorMode] = React.useState(mode);

  React.useEffect(() => {
    setColorMode(mode);
  }, [mode]);

  // useEffect(() => {
  //   setColorScheme(mode);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [mode]);

  return (
    // <View
    //   style={[
    //     config[colorScheme!],
    //     { flex: 1, height: '100%', width: '100%' },
    //     props.style,
    //   ]}
    // >
    <BaseProvider config={config} colorMode={mode}>
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </BaseProvider>

    // </View>
  );
}
