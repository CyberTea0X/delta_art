'use client';
import LoginForm from '@/lib/components/LoginForm';
import TopAppBar from '@/lib/components/TopBar';
import { Box } from '@mui/material';
import { useState } from 'react';


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

    return (
        <Box>
            <TopAppBar
                onLoginClicked={handleLoginClick}
                onSignupClicked={handleSignupClick} />
            {(currentForm === CurrentForm.LoginForm) && <LoginForm />}
        </Box>
    );
}

