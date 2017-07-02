import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
    Link
} from 'react-router-dom';

export const AppLink = styled(({ first, last, ...rest }) => <Link {...rest} />)`
    padding-right: ${({ last }) => last ? 0 : rem('15px')};
    padding-left: ${({ first }) => first ? 0 : rem('15px')};
`;
