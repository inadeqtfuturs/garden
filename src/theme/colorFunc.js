import { darken as themeUIDarken } from '@theme-ui/color';
import { get } from 'styled-system';

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 0. color
// 1. darken(color, layer)
// 2+ darken(newColor, layer)

export function darken(color, layers) {
  // console.log('layers', layers);
  const reducedLayers = layers.reduce((init, layer) => init + layer, 0);
  return themeUIDarken(color, reducedLayers);
}

export const getProp = path => props => {
  // console.log('{ path, props }', { path, props });
  // console.log('get(props.theme, path)', get(props.theme, path));
  return get(props.theme, path);
};

/* export const getBorder = (border, color) => props => {
  const b = get(props.theme, `borders[1]`);
  const c = get(props.theme, `colors.primary`);
  return `${b} ${c}`;
}; */
