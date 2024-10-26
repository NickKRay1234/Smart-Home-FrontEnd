type Slide = () => { start: number; end: number };

export const slide = (max: number, step: number = 1): Slide => {
  let start = 0;
  let end = step;

  return () => {
    if (end >= max - 1) {
      if (max - end > 0) {
        start = end;
        end = max;
        return { start, end };
      }
      start = 0;
      end = step;

      return { start, end };
    }

    if (end <= 0) {
      end = step;
      start = 0;

      return { start, end };
    }

    start = end;
    end += step;

    return { start, end };
  };
};
