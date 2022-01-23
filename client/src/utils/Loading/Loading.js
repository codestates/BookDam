import React from 'react';
import {
  LoadingContainer,
  LoadingCom
} from './LoadingStyle';

export function Loading () {
  return (
    <>
      <LoadingContainer>
        <LoadingCom />Loading...
      </LoadingContainer>
    </>
  );
}
