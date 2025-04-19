<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();

            // Lien avec l'utilisateur
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            // Informations principales
            $table->string('tracking_number')->unique();     // Numéro de suivi
            $table->string('status');                        // ex: livré, en attente, en cours...
            $table->decimal('crbt_amount', 10, 2)->default(0); // Montant CRBT
            $table->integer('colis_count')->default(1);      // Nombre de colis
            $table->string('destination')->nullable();       // Ville, région...

            // Dates importantes
            $table->date('deposit_date')->nullable();        // Date de dépôt
            $table->date('status_date')->nullable();         // Dernier changement de statut
            $table->date('payment_date')->nullable();        // Date de paiement (si payé)

            // Horodatage
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};
