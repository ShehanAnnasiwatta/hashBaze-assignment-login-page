import styles from './Login.module.css'
import AuthButton from '../../components/button/AuthButton';
import { Box, Container, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';

const css = {
  borderRadius: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '.5rem'
    }
  },
  textWdith: {
    width: 'fit-content'
  },
  icon: {
    width: '1.1rem',
    height: '1.1rem',
  }
}


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // useEffect(() => {
  //   console.log(showPassword)
  // }, [showPassword])
  return (
    <div className={styles.bg__img}>
      <Container maxWidth='md'>
        <Box className={styles.outer__container}>
          <Box className={styles.container}>
            <Box className={styles.title__container}>
              <Typography variant='h5' className={styles.title}>
                Sign in
              </Typography>
            </Box>
            {/* Form component */}
            <Box component='form' onSubmit={''} className={styles.form__container}>
              <Box>
                <label htmlFor="email" className={styles.label}>Email</label>
                <TextField
                  required
                  variant='outlined'
                  id='email'
                  size='small'
                  type='email'
                  fullWidth
                  className={styles.input}
                  sx={css.borderRadius}
                />
              </Box>
              <Box>
                <label htmlFor="password" className={styles.label}>Your password</label>
                <TextField
                  required
                  variant='outlined'
                  id='password'
                  size='small'
                  type='password'
                  fullWidth
                  className={styles.input}
                  sx={css.borderRadius}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handlePasswordVisibility}
                        >
                          {showPassword ? <VisibilityOff sx={css.icon} /> : <Visibility sx={css.icon} />}
                        </IconButton>
                      </InputAdornment>
                    }
                  }} />
              </Box>
              <Box>
                <Typography variant='caption'>
                  By continuing, you agree to the <span><a href="#">Terms of use</a></span> and <span><a href="#">Privacy policy</a></span>
                </Typography>
                <AuthButton title={'Log In'} />
              </Box>
            </Box>
            <Box className={styles.link__container}>
              <Typography variant='caption' className={styles.link}>
                <a href="">Forgot your password?</a>
              </Typography>

              <Typography variant='caption' className={styles.link}>
                Don't have an account? <span><a href="">Sign Up</a></span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>

  );
}

export default Login;
