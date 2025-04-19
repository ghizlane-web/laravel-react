import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { FaChartBar, FaPaperPlane, FaArchive, FaClipboardList } from 'react-icons/fa';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const userInitial = user.name ? user.name[0].toUpperCase() : '?';
    const [showClientInfo, setShowClientInfo] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white relative">
            {/* Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={() => setSidebarOpen(false)}>
                    <div
                        className="absolute top-0 left-0 w-64 bg-white h-full shadow-lg p-4 space-y-4 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="font-bold text-lg mb-4">Menu</div>
                        <Link href="/statistiques" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 font-medium text-gray-700 bg-blue-50">
                            <FaChartBar className="text-xl" />
                            <span>Mes Statistiques</span>
                        </Link>
                        <Link href="/mes-envois" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 font-medium text-gray-700">
                            <FaPaperPlane className="text-xl" />
                            <span>Mes envois</span>
                        </Link>
                        <Link href="/archives" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 font-medium text-gray-700">
                            <FaArchive className="text-xl" />
                            <span>Mes envois archives</span>
                        </Link>
                        <Link href="/modifications" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 font-medium text-gray-700">
                            <FaClipboardList className="text-xl" />
                            <span>Mes demandes de modification</span>
                        </Link>
                    </div>
                </div>
            )}

            {/* Navbar */}
            <nav className="bg-white shadow py-4 px-6 z-10 relative">
                <div className="container mx-auto flex items-center justify-between">
                    
                    {/* Left - Burger + User Info */}
                    <div className="flex-1 flex items-center space-x-4">
                        {/* Burger Icon */}
                        <button onClick={() => setSidebarOpen(true)} className="text-blue-900 focus:outline-none">
                            <div className="space-y-1">
                                <span className="block w-5 h-0.5 bg-blue-900"></span>
                                <span className="block w-5 h-0.5 bg-blue-900"></span>
                                <span className="block w-5 h-0.5 bg-blue-900"></span>
                            </div>
                        </button>

                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                            <div className="text-sm font-semibold">Bienvenue: <span className="font-normal">{user.name}</span></div>
                            <div className="text-sm font-semibold">Profil: <span className="font-normal">{user.name.toUpperCase()}</span></div>
                        </div>
                    </div>

                    {/* Center - Logo */}
                    <div className="flex-1 flex justify-center">
                        <ApplicationLogo className="h-20 w-auto" />
                    </div>

                    {/* Right - User Icon Dropdown */}
                    <div className="flex-1 flex justify-end items-center">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center focus:outline-none transition">
                                    <div className="w-10 h-10 rounded-full bg-[#2E4592] text-white flex items-center justify-center font-bold">
                                        {userInitial}
                                    </div>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content align="right" width="48">
                                <div className="px-4 py-3">
                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                    <div className="text-xs text-gray-500 mt-1">{user.email}</div>
                                </div>

                                <div className="border-t border-gray-100">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowClientInfo(!showClientInfo);
                                        }}
                                        className="w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                                    >
                                        <span>Info commerçant</span>
                                        <svg
                                            className={`w-4 h-4 ml-2 transform transition-transform ${showClientInfo ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {showClientInfo && (
                                        <div className="px-4 py-2 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
                                            <textarea
                                                readOnly
                                                className="w-full p-2 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-md resize-none cursor-default"
                                                rows="2"
                                                value={`Client: ${user.name}`}
                                            />
                                        </div>
                                    )}

                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="px-4 py-2.5 hover:bg-red-50 text-sm text-red-600 flex items-center border-t border-gray-100"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Déconnexion
                                    </Dropdown.Link>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <main className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
