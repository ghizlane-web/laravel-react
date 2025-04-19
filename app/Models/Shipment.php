<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;

    // Les champs qu'on peut remplir (mass assignable)
    protected $fillable = [
        'user_id',
        'tracking_number',
        'status',
        'crbt_amount',
        'colis_count',
        'destination',
        'deposit_date',
        'status_date',
        'payment_date',
    ];

    // Si tu veux définir la relation avec User :
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
