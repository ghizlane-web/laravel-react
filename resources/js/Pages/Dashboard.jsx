import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, user, totalColis, envoisPeriode, colisPeriode, totalCrbt }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                        {/* Nombre total de colis */}
                        <div className="bg-white p-6 rounded-2xl shadow text-center">
                            <h3 className="text-gray-500">Nb. Colis affiché</h3>
                            <p className="text-3xl font-bold text-blue-600">{totalColis}</p>
                        </div>

                        {/* Envois et colis de la période */}
                        <div className="bg-white p-6 rounded-2xl shadow text-center">
                            <h3 className="text-gray-500">Total envois de la période</h3>
                            <p className="text-3xl font-bold text-blue-600">{totalColis}</p>
                           </div>

                        {/* Total CRBT */}
                        <div className="bg-white p-6 rounded-2xl shadow text-center">
                            <h3 className="text-gray-500">Total CRBT</h3>
                            <p className="text-3xl font-bold text-green-600">{totalCrbt} MAD</p>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
