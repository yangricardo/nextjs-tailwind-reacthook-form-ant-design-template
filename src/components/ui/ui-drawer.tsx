import { Button, Drawer, DrawerProps } from 'antd';
import { FC, ReactNode, useState } from 'react';

export interface IUiDrawer {
  buttonContent?: ReactNode;
  drawer?: DrawerProps;
}

export const UiDrawer: FC<IUiDrawer> = ({
  children,
  drawer,
  buttonContent,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        {buttonContent || 'Open'}
      </Button>
      <Drawer
        {...drawer}
        title={drawer?.title || 'Drawer Sample'}
        placement={drawer?.placement || 'right'}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {children}
      </Drawer>
    </>
  );
};
