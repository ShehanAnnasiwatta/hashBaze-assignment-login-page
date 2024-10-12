import styles from './Login.module.css'
import AuthButton from '../../components/button/AuthButton';
import { Box, Container, TextField, Typography } from '@mui/material';

const border = {
  radius: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '.5rem'
    }
  }
}


const Login = () => {
  return (

    <Container maxWidth='md'>
      <Box className={styles.outer__container}>
        <Box className={styles.container}>
          <Box className={styles.title__container}>
            <Typography variant='h5' className={styles.title}>
              Sign In
            </Typography>
          </Box>
          <Box component='form' onSubmit={''} className={styles.form__container}>
            <Box>
              <label htmlFor="email">Email</label>
              <TextField
                required
                variant='outlined'
                id='email'
                size='small'
                type='email'
                fullWidth
                className={styles.input}
                sx={border.radius} />
            </Box>
            <Box>
              <label htmlFor="password">Your password</label>
              <TextField
                required
                variant='outlined'
                id='password'
                size='small'
                type='password'
                fullWidth
                className={styles.input}
                sx={border.radius} />
            </Box>
            <Box>
              <AuthButton title={'Log In'} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
