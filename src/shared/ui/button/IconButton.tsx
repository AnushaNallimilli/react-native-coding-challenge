import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Button from './Button';

type IconButtonProps = Readonly<{
    /**
     * The icon to display when not hovering.
     */
    icon: IconDefinition;
    /**
     * The color of the icon.
     */
    color: string;
    /**
     * The size of the icon.
     */
    size?: number;
    /**
     * Whether the button is disabled.
     */
    isDisabled?: boolean;
    /**
     * Callback for button click.
     */
    onClick: (event: GestureResponderEvent) => void;
    /**
     * To show loading icon.
     */
    isLoading?: boolean;
    /**
     * Whether to have padding around the button or not
     */
    noPadding?: boolean;
}>;

export default function IconButton({
    icon,
    color,
    size,
    onClick,
    isDisabled = false,
    isLoading = false,
    noPadding = false,
}: IconButtonProps) {
    return (
        <Button
            appearance={noPadding ? 'link' : 'subtle'}
            onClick={onClick}
            isDisabled={isDisabled}
            isLoading={isLoading}>
            <FontAwesomeIcon size={size} icon={icon} color={color} />
        </Button>
    );
}
