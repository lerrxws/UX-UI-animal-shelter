import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CustomIcons() {
  // Use media query to detect small screens
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        siblingCount={isSmallScreen ? 0 : 1}
        boundaryCount={1}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
