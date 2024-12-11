
import { LoginForm } from '@/components/ui/login-form';
import { signIn } from 'next-auth/react';
import AuthPanel from '@/components/ui/auth-panel';


export default function Home() {
  
  const signInAction = async (formData: FormData) => {
    'use server';
    await signIn('credentials', formData);
  };

  return (
    // <div>
    //   <LoginForm signInAction={signInAction} />
    // </div>
    <div className="min-h-screen">
      <div className="overflow-hidden mx-auto w-full max-w-7xl">
        <div className="p-6 min-h96 relative">
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-brand-secondary">
              Welcom to Auty!!!
            </h1>
          </div>
        </div>
        <AuthPanel />
      </div>
    </div>
  );
}