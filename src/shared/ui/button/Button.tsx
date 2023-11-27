import {Button as NativeBaseButton, IButtonProps} from 'native-base';
import React, {ReactNode} from 'react';
import {GestureResponderEvent, TextStyle, ViewStyle} from 'react-native';

import fonts from '../../../assets/fonts/fonts';
import Colors from '../../../styles/colors';
import {Lookup} from '../../utils/types';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonAppearance =
  | 'primary'
  | 'secondary'
  | 'subtle'
  | 'link'
  | 'destructive';

type BaseStyleProps = Readonly<{backgroundColor: string}>;

const getBaseStyles = ({backgroundColor}: BaseStyleProps): ViewStyle => ({
  borderRadius: 8,
  shadowColor: 'rgba(125, 134, 178, 0.25)',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 4,
  backgroundColor,
});

const BASE_PROPS: IButtonProps = {spinnerPlacement: 'end'};

const BASE_TEXT_STYLES: TextStyle = {
  fontSize: 14,
  fontFamily: fonts.lato,
  fontWeight: '400',
};

const BUTTON_PROPS: Lookup<ButtonAppearance, IButtonProps> = {
  primary: {
    ...BASE_PROPS,
    variant: 'solid',
    style: getBaseStyles({backgroundColor: Colors.LIGHT_BLUE}),
    _text: {style: {...BASE_TEXT_STYLES, color: Colors.WHITE}},
    _pressed: {opacity: 0.6},
  },
  secondary: {
    ...BASE_PROPS,
    variant: 'solid',
    style: getBaseStyles({backgroundColor: Colors.NEUTRAL_LIGHT}),
    _text: {style: {...BASE_TEXT_STYLES, color: Colors.NAVY_BLUE}},
    _pressed: {opacity: 0.6},
  },
  subtle: {
    ...BASE_PROPS,
    variant: 'ghost',
    _pressed: {style: getBaseStyles({backgroundColor: Colors.LIGHT_GRAY})},
    _text: {style: {...BASE_TEXT_STYLES, color: Colors.NAVY_BLUE}},
  },
  link: {
    ...BASE_PROPS,
    variant: 'ghost',
    padding: 0,
    _pressed: {style: getBaseStyles({backgroundColor: Colors.LIGHT_GRAY})},
    _text: {style: {...BASE_TEXT_STYLES, color: Colors.LIGHT_BLUE}},
  },
  destructive: {
    ...BASE_PROPS,
    variant: 'solid',
    style: getBaseStyles({backgroundColor: Colors.RED_LOGOUT}),
    _text: {style: {...BASE_TEXT_STYLES, color: Colors.WHITE}},
    _pressed: {opacity: 0.6},
  },
};

export type ButtonProps = Readonly<{
  children?: ReactNode;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  isLoadingText?: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  onClick: (event: GestureResponderEvent) => void;
}>;

export default function Button({
  children,
  appearance = 'primary',
  size = 'md',
  isDisabled = false,
  isLoading = false,
  isLoadingText,
  rightIcon,
  leftIcon,
  onClick,
}: ButtonProps) {
  return (
    <NativeBaseButton
      {...BUTTON_PROPS[appearance]}
      size={size}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isLoadingText={isLoadingText}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      onPress={onClick}>
      {children}
    </NativeBaseButton>
  );
}
