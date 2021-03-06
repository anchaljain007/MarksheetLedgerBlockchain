// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography,CardActionArea } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function ViewMarksheet() {
  return (
    <RootStyle>
      <CardActionArea href="../../dashboard/viewMarksheet/">
      <IconWrapperStyle>
        <Iconify icon="carbon:view-filled" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">View Marksheet</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        View marksheet of a specific user
      </Typography>
      </CardActionArea>
    </RootStyle>
  );
}
