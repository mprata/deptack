import React from 'react';

export interface TabPanelProps {
    children: React.ReactNode;
    index: any;
    value: any;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`paytach-tabpanel-${index}`}
        aria-labelledby={`paytach-tab-${index}`}
      >
        {value === index && (
            <div>
                { children }
            </div>
        )}
      </div>
    );
  }