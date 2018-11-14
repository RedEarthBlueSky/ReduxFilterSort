export const filterText = (text = '') => (
  {
    type: 'FILTER_TEXT',
    text
  }
);

export const startYear = (start) => (
  {
    type: 'START_YEAR',
    startYear: start,
  }
);

export const endYear = (end) => (
  {
    type: 'END_YEAR',
    endYear: end,
  }
);

export const sortBy = (sortType) => (
  {
    type: 'SORT_BY',
    sortType
  }
);


const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startYear: undefined,
  endYear: undefined,
};

export const clear = () => (
  {
    type: 'CLEAR',
    defaultFilter: filtersReducerDefaultState
  }
);
