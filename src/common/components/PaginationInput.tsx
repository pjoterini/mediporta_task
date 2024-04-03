import { TextField } from '@mui/material';
import { GridPaginationModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface PaginationInputProps {
  paginationModel: GridPaginationModel;
  setPaginationModel: React.Dispatch<React.SetStateAction<GridPaginationModel>>;
}

const PaginationInput = ({ paginationModel, setPaginationModel }: PaginationInputProps) => {
  const [inputValue, setInputValue] = useState<string>('10');

  const debouncePageSize = useDebouncedCallback((e) => {
    setPaginationModel((prev) => ({ ...prev, pageSize: +e.target.value }));
  }, 2000);

  return (
    <TextField
      margin="dense"
      sx={{ width: '160px' }}
      label="Choose page size"
      value={inputValue}
      type="number"
      InputProps={{ inputProps: { max: 100, min: 10 } }}
      onChange={(e) => {
        if (+e.target.value < 10) {
          setInputValue('10');
        } else if (+e.target.value > 100) {
          setInputValue('100');
        } else if (+e.target.value === paginationModel.pageSize) {
          setInputValue(e.target.value);
        } else {
          setInputValue(e.target.value);
          debouncePageSize(e);
        }
      }}
    />
  );
};

export default PaginationInput;
