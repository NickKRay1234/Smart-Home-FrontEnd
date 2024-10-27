export type Slide = () => { start: number; end: number; disabled: boolean };

export const slide = (max: number, step: number = 1): Slide => {
  let start = 0;
  let end = step;
  let disabled = step >= max;

  return () => {
    if (end >= max - 1) {
      if (max - end > 0) {
        start = end;
        end = max;
        return { start, end, disabled };
      }
      start = 0;
      end = step;

      return { start, end, disabled };
    }

    if (end <= 0) {
      end = step;
      start = 0;

      return { start, end, disabled };
    }

    start = end;
    end += step;

    return { start, end, disabled };
  };
};
