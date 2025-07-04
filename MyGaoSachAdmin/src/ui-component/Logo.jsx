import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        color: 'black', // màu đen
        fontWeight: 'bold',
        fontSize: '1.8rem' // Tăng kích thước chữ, có thể điều chỉnh
      }}
    >
      Mỳ Gạo Chũ
    </Typography>
  );
};

export default Logo;
