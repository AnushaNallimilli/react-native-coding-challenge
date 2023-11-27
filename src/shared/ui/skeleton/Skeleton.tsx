import {Skeleton as NativeBaseSkeleton} from 'native-base';
import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import Colors from '../../../styles/colors';

export type SkeletonRoundSize = 'md' | 'full';

const BASE_STYLES: ViewStyle = {
  borderRadius: 8,
  flex: 1,
};

export type SkeletonProps = Readonly<{
  children: ReactNode;
  rounded?: SkeletonRoundSize;
  height?: number;
  isLoading?: boolean;
}>;

export default function Skeleton({
  children,
  rounded = 'md',
  height,
  isLoading = false,
}: SkeletonProps) {
  return (
    <NativeBaseSkeleton
      style={BASE_STYLES}
      height={height}
      rounded={rounded}
      isLoaded={!isLoading}
      startColor={Colors.LIGHT_GRAY}>
      {children}
    </NativeBaseSkeleton>
  );
}
