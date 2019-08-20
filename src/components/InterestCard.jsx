import React from 'react';

import { Card } from '../styled-components';

export default function InterestCard({ zIndex = -1, children }) {
  return <Card zIndex={zIndex}>{children}</Card>;
}
