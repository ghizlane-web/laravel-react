import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white border border-gray-300 overflow-hidden sm:rounded-lg">
                <div className="flex justify-center mb-6">
                    <img 
                        src="/img/amana.jpg" 
                        alt="Company Logo"
                        className="h-20 w-auto p-1"
                    />
                </div>
                {children}
            </div>
        </div>
    );
}