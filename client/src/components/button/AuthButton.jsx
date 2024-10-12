import Button from '@mui/material/Button'

const styles = {
    textDecoration: 'none',
    textTransform: 'capitalize',
    borderRadius: '3rem',
    lineHeight: 1,
    padding: '0.875rem',
    fontSize: '1rem',
    marginBlock: '0.5rem'
}

const AuthButton = ({ title }) => {
    return (
        <div>
            <Button
                variant='contained'
                fullWidth
                sx={styles}
            >{title}</Button>
        </div>
    );
}

export default AuthButton;
