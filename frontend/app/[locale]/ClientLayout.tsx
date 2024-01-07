'use client';
import SignInForm from '@/lib/components/LoginForm';
import SignUpForm from '@/lib/components/SignUpForm';
import TopAppBar from '@/lib/components/TopBar';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function ClientLayout() {
  const router = useRouter()
  const [currentForm, setCurrentForm] = useState<CurrentForm | null>(null);
  enum CurrentForm {
    LoginForm,
    SignupForm
  }
  function handleSignInClick(): void {
    setCurrentForm(CurrentForm.LoginForm);
  }

  function handleSignUpClick(): void {
    setCurrentForm(CurrentForm.SignupForm);
  }

  function handleCloseForm(): void {
    setCurrentForm(null);
  }

  function handleProfileClick(): void {
    router.push("/profile");
  }

  function handleHomePageClick(): void {
    router.replace("/");
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCurrentForm(null);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);



  return (
    <Box>
      <TopAppBar
        onHomePageClicked={handleHomePageClick}
        onLoginClicked={handleSignInClick}
        onSignupClicked={handleSignUpClick}
        onProfileClicked={handleProfileClick}
      />
      {
        (currentForm === CurrentForm.LoginForm) &&
        <SignInForm onClose={handleCloseForm} onGotoSignUp={handleSignUpClick} />
      }
      {
        (currentForm === CurrentForm.SignupForm) &&
        <SignUpForm onClose={handleCloseForm} onGotoSignIn={handleSignInClick} />
      }
    </Box>
  );
}

