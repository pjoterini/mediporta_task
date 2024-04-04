import { TextField, Typography } from '@mui/material';
import { GridPaginationModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface PaginationInputProps {
  setPaginationModel: React.Dispatch<React.SetStateAction<GridPaginationModel>>;
}

const PaginationInput = ({ setPaginationModel }: PaginationInputProps) => {
  const [inputValue, setInputValue] = useState<string>('10');
  const [error, setError] = useState<boolean>(false);

  const debouncePageSize = useDebouncedCallback((newPageSize) => {
    setPaginationModel((prev) => ({ ...prev, pageSize: newPageSize }));
  }, 500);

  return (
    <>
      <TextField
        margin="dense"
        sx={{ width: '160px' }}
        label={'Choose page size'}
        value={inputValue}
        type="number"
        InputProps={{ inputProps: { max: 100, min: 10 } }}
        error={error}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (+e.target.value >= 10 && +e.target.value <= 100) {
            setError(false);
            debouncePageSize(+e.target.value);
          } else {
            debouncePageSize.cancel();
            setError(true);
          }
        }}
      />
      <Typography color="error" visibility={error ? 'visible' : 'hidden'} ml="auto">
        Page size must be between 10 and 100
      </Typography>
    </>
  );
};

export default PaginationInput;
