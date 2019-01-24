import { SerializedStyles } from '@emotion/core';
import { suomifiTheme, Theme } from '../theme';

/**
 * Return defaultProps from given component and theme as suomifiTheme
 * @param component takes defaultProps from component
 * @callback addProps(theme) function with theme as value returning other optional defaultProps
 */
export const defaultPropsTheme = (
  { defaultProps }: any = {},
  // @ts-ignore
  addProps = (theme: Theme) => ({}),
) => ({
  ...defaultProps,
  ...addProps(suomifiTheme),
  theme: suomifiTheme,
});

interface BaseStylesInterface {
  theme: Theme;
  [key: string]: any;
}

/**
 *  Get CSS export from baseStyles generated by Emotion/Styled
 * @param baseStyles Emotion CSS
 * @param props properties needed to get desired styles from components
 */
export const cssFromBaseStyles = (
  baseStyles: ({ theme }: BaseStylesInterface) => SerializedStyles,
  props = {},
) => baseStyles({ ...props, theme: suomifiTheme }).styles;

export function objValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}