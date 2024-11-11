const brakePoints = {
  medium: 1280,
  small: 744,
};

export const resize = <T>(prod: T[], width: number): T[] => {
  const step = 5;
  if (width > brakePoints.medium && prod?.length) {
    return prod.slice(0, step);
  } else if (width > brakePoints.small && prod?.length) {
    return prod.slice(0, step - 2);
  } else {
    return prod.slice(0, step - 3);
  }
};
