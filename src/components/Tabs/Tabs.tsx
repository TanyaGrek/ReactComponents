import React from 'react';
import { TabsWrapper } from './Tabs.styles';

interface ITabs {
  tabs: string[];
}

export const Tabs = ({ tabs }: ITabs) => {
  return (
    <TabsWrapper>
      {tabs.map(tab => <div>{tab}</div>)}
    </TabsWrapper>
  )
};
