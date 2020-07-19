// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import { mount } from 'enzyme';

import Root from '../index';
import { type errorPropsType } from '../ErrorCatch';

import {
  mainRender,
  Main,
  loadingRender,
  Loading,
  errorRender,
  ErrorComponent,
  pageRender,
  Page,
  chunkName,
  routes,
} from './__ignore__/testings';

pageRender.mockReturnValue(<Link to="/two" />);
errorRender.mockImplementation(({ error }: errorPropsType) => (
  <>
    <Link to="/" />

    <div>{error.message}</div>
  </>
));

const wrapper = mount(
  <Router initialEntries={[chunkName]}>
    <Root
      Main={Main}
      Loading={Loading}
      Error={ErrorComponent}
      routes={routes}
      initialState={{
        Page,
        mainProps: {},
        pageProps: {},
      }}
    />
  </Router>,
);

describe('react-ssr', () => {
  beforeEach(() => {
    const mainGetInitialProps = Main.getInitialProps;
    const pageGetInitialProps = Page.getInitialProps;

    mainRender.mockClear();
    pageRender.mockClear();
    loadingRender.mockClear();
    errorRender.mockClear();

    // $FlowFixMe jest mock
    if (mainGetInitialProps) mainGetInitialProps.mockClear();

    // $FlowFixMe jest mock
    if (pageGetInitialProps) pageGetInitialProps.mockClear();
  });

  test.each`
    pathname  | isError
    ${'/two'} | ${false}
    ${'/'}    | ${false}
    ${'/two'} | ${true}
  `(
    'go to $pathname',
    async ({ pathname, isError }: {| pathname: string, isError: boolean |}) => {
      const mockLog = jest.fn();

      global.console.error = mockLog;

      if (isError)
        pageRender.mockImplementation(() => {
          throw new Error('Render error');
        });
      else
        pageRender.mockReturnValue(
          <Link to={pathname === '/' ? '/two' : '/'} />,
        );

      // TODO: modify, https://github.com/airbnb/enzyme/issues/2171
      await act(async () => {
        Simulate.click(
          // $FlowFixMe
          ReactDOM.findDOMNode(wrapper.find('a').instance()),
          { button: 0 },
        );
      });
      // TODO: modify, https://github.com/airbnb/enzyme/issues/2171
      wrapper.update();

      expect(mainRender).toHaveBeenCalledTimes(2);
      expect(Main.getInitialProps).toHaveBeenCalledTimes(1);
      expect(pageRender).toHaveBeenCalledTimes(isError ? 2 : 1);
      expect(Page.getInitialProps).toHaveBeenCalledTimes(1);
      expect(loadingRender).toHaveBeenCalledTimes(1);

      if (isError) {
        expect(errorRender).toHaveBeenCalledTimes(1);
        expect(mockLog).toHaveBeenCalled();
      }
    },
  );

  test('update page after component is unmount', () => {
    wrapper.find(Link).simulate('click', { button: 0 });

    expect(mainRender).not.toHaveBeenCalled();

    wrapper.unmount();

    expect(mainRender).not.toHaveBeenCalled();
  });
});
