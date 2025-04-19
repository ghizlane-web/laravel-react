<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Shipment;  


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function dashboard(Request $request): Response
    {
        $user = $request->user();

        // Statistiques de l'utilisateur
        $totalColis = Shipment::where('user_id', $user->id)->count();
        $totalCrbt = Shipment::where('user_id', $user->id)->sum('crbt_amount');

        return Inertia::render('Dashboard', [
            'user' => $user,
            'totalColis' => $totalColis,
            'totalCrbt' => $totalCrbt,
        ]);
    }

    /**
     * Retourne les envois (colis) de l'utilisateur.
     */
    public function getShipments(Request $request)
    {
        $user = $request->user();

        $shipments = Shipment::where('user_id', $user->id)
            ->latest()
            ->get();

        return response()->json($shipments);
    }

    /**
     * Retourne le montant total CRBT pour l'utilisateur.
     */
    public function getTotalCrbt(Request $request)
    {
        $user = $request->user();
        $total = Shipment::where('user_id', $user->id)->sum('crbt_amount');

        return response()->json(['total_crbt' => $total]);
    }
}
