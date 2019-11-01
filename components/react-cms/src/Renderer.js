// @flow

import React from 'react';

import { type sourceType } from './hooks/useSource';
import useDnd from './hooks/useDnd';

type propsType = {
  source: {|
    id: string,
    data: $ElementType<sourceType, number>,
    children: $ReadOnlyArray<$PropertyType<propsType, 'source'>>,
  |},
};

const Renderer = React.memo<propsType>(
  ({
    source: {
      id,
      data: {
        type,
        component: { type: componentType, props },
      },
      children,
    },
  }: propsType) =>
    React.createElement(componentType, {
      ...props,
      ...useDnd(id, type, {
        type: componentType,
        props,
      }),
      children: (children || []).map(
        (child: $PropertyType<propsType, 'source'>) => (
          <Renderer key={child.id} source={child} />
        ),
      ),
    }),
);

Renderer.displayName = 'Memo(Renderer)';

export default Renderer;
