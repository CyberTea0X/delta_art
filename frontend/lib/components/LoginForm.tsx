import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import {useTranslations} from 'next-intl';

type SignInProps = {
  onClose: React.MouseEventHandler<HTMLButtonElement>
}

export default function SignIn({onClose}: SignInProps) {
    const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
  };
  const t = useTranslations('signIn');
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50vw, -50vh)",
        width: '100vw',
        height: '100vh',
        zIndex: 999,
        bgcolor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
      <Box
        sx={{
          position: "relative",
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: '10vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.default",
        }}
      >
        <IconButton onClick={onClose} aria-label="delete" size="small"
          sx = {{
              position: "absolute",
              top: '1%',
              right: '1%',
              zIndex: 1000,
            }}
        >
          <Close fontSize="inherit" />
        </IconButton>
        <Typography component="h1" variant="h5">
          {t('title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login_field"
            label={t('hint')}
            name="login"
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('password')}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t('remember')}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t('title')}          
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t('remember')}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t('hint2')}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
