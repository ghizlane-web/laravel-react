import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <h1 style={{color:'#304793',fontSize:"medium",fontWeight:"bold",textAlign:"center"}}>Bienvenue sur le Portail des clients Amana</h1>

            <p style={{fontSize:"24px",color:"#363636",textAlign:"center",marginTop:"30px",marginBottom:"30px",lineHeight:"1.1"}}>Connexion</p>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Courriel" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
    <label className="flex items-center justify-between gap-4">
        <div className="flex items-center">
            <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600">
                Se souvenir de moi
            </span>
        </div>

        {canResetPassword && (
            <Link
                href={route('password.request')}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 whitespace-nowrap"
            >
                Mot de passe oublié ?
            </Link>
        )}
    </label>
</div>

            <div className="mt-4 w-full flex items-center justify-end">
                <PrimaryButton 
                    className=" ms-0"  // Changed from ms-4 to ms-0
                    disabled={processing}
                >
                    Connexion
                </PrimaryButton>
            </div>
            </form>
        </GuestLayout>
    );
}
