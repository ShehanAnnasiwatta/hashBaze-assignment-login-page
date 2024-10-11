import styles from './Login.module.css'
import AuthButton from '../../components/button/AuthButton';
import { Box, Container, TextField, Typography } from '@mui/material';


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

          <form onSubmit={''}>
            <label htmlFor="email">Email</label>
            <TextField
              variant='outlined'
              id='email'
              size='small'
              type='email'
              fullWidth
              className={styles.input}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '.5rem'
                }
              }} />

            <label htmlFor="password">Your password</label>
            <TextField
              variant='outlined'
              id='password'
              size='small'
              type='password'
              fullWidth
              className={styles.input}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '.5rem'
                }
              }} />

            <AuthButton title={'Log In'}/>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
