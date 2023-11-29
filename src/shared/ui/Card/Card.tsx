import {Box} from 'native-base';
import React, {ReactNode} from 'react';
import Colors from '../../../styles/colors';

export type CardProps = Readonly<{
  children: ReactNode;
  noPadding?: boolean;
}>;

export default function Card({children, noPadding = false}: CardProps) {
  return (
    <Box
      rounded={8}
      width="100%"
      borderWidth="1"
      borderRadius={10}
      borderColor={Colors.BORDER_COLOR}
      backgroundColor={Colors.WHITE}
      padding={noPadding ? 0 : 4}>
      {children}
    </Box>
  );
}
