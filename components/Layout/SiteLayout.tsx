import React from 'react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

/**
 * SiteLayout
 * @param {React.Node} { children }
 */

type MyProps = {
  children: React.ReactNode;
};

const SiteLayout: React.FC<MyProps> = ({ children }: MyProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <main>{children}</main>
  </ThemeProvider>
);

export default SiteLayout;
