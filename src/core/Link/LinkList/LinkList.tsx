import React, { forwardRef } from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { LinkListStyles } from './LinkList.baseStyles';
import { SuomifiThemeProp, SuomifiThemeConsumer } from '../../theme';
import { HtmlUlProps, HtmlUlWithRef } from '../../../reset';
import { getConditionalAriaProp } from '../../../utils/aria';

const LinkListClassName = 'fi-link-list';
const SmallScreenClassName = 'fi-link-list--small';

export interface LinkListProps extends HtmlUlProps {
  /** Ref  is passed to the list element. Alternative to React `ref` attribute. */
  forwardedRef?: React.Ref<HTMLUListElement>;
  /** Id of the heading or label of the list */
  ariaDescribedBy: string;
  /** Set smaller font size for the list elements */
  smallScreen?: boolean;
}

const StyledLinkList = styled(
  ({
    className,
    theme,
    children,
    smallScreen,
    ariaDescribedBy,
    forwardedRef,
    ...passProps
  }: LinkListProps & SuomifiThemeProp) => (
    <HtmlUlWithRef
      ref={forwardedRef}
      {...passProps}
      className={classnames(className, LinkListClassName, {
        [SmallScreenClassName]: smallScreen,
      })}
      {...getConditionalAriaProp('aria-describedby', [ariaDescribedBy])}
    >
      {children}
    </HtmlUlWithRef>
  ),
)`
  ${({ theme }) => LinkListStyles(theme)}
`;

const LinkList = forwardRef(
  (props: LinkListProps, ref: React.Ref<HTMLUListElement>) => (
    <SuomifiThemeConsumer>
      {({ suomifiTheme }) => (
        <StyledLinkList theme={suomifiTheme} forwardedRef={ref} {...props} />
      )}
    </SuomifiThemeConsumer>
  ),
);

LinkList.displayName = 'LinkList';
export { LinkList };