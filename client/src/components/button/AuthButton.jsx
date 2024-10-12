import Button from '@mui/material/Button'
import { grey } from '@mui/material/colors'

const styles = {
    textDecoration: 'none',
    textTransform: 'capitalize',
    borderRadius: '3rem',
    lineHeight: 1,
    padding: '0.875rem',
    fontSize: '1rem',
    marginBlock: '0.5rem',
    bgcolor: grey['800'],
    '&:hover':{
        bgcolor: grey['900']
    },
    boxShadow:"10px 5px 5px grey['500']"
}

const AuthButton = ({ title }) => {
    return (
        <div>
            <Button
                variant='contained'
                fullWidth
                sx={styles}
                type='submit'
            >{title}</Button>
        </div>
    );
}

export default AuthButton;
