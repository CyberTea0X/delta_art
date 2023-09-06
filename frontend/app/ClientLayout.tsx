'use client';
import LoginForm from '@/lib/components/LoginForm';
import SignUpForm from '@/lib/components/SignUpForm';
import TopAppBar from '@/lib/components/TopBar';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';


export default function ClientLayout() {
    const [currentForm, setCurrentForm] = useState<CurrentForm | null>(null);
    enum CurrentForm {
        LoginForm,
        SignupForm
    }
    function handleLoginClick(): void {
        setCurrentForm(CurrentForm.LoginForm);
    }

    function handleSignupClick(): void {
        setCurrentForm(CurrentForm.SignupForm);
    }

    function handleCloseForm(): void {
        setCurrentForm(null);
    }

    function handleProfileClick(): void {
        throw new Error('Function not implemented.');
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
                onLoginClicked={handleLoginClick}
                onSignupClicked={handleSignupClick} 
                onProfileClicked={handleProfileClick}
                />
            {(currentForm === CurrentForm.LoginForm) && <LoginForm onClose={handleCloseForm}/>}
            {(currentForm === CurrentForm.SignupForm) && <SignUpForm onClose={handleCloseForm}/>}
        </Box>
    );
}

