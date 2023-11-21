import {faSearch} from '@fortawesome/pro-solid-svg-icons';
import React from 'react';
import IconButton from '../button/IconButton';
import Colors from '../../../styles/colors';

export type SearchButtonProps = Readonly<{
  onSearchClick: () => void;
}>;

export default function SearchButton({onSearchClick}: SearchButtonProps) {
  return (
    <>
      <IconButton
        icon={faSearch}
        size={20}
        color={Colors.DARK_GRAY}
        onClick={onSearchClick}
      />
    </>
  );
}
