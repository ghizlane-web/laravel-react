<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Shipment;
use Illuminate\Support\Str;



class ShipmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Shipment::create([
            'user_id' => 1,
            'tracking_number' => Str::random(10),
            'status' => 'livré',
            'crbt_amount' => 250.00,
            'colis_count' => 2,
            'destination' => 'Casablanca',
            'deposit_date' => now()->subDays(5),
            'status_date' => now()->subDays(2),
            'payment_date' => now(),
        ]);
        Shipment::create([
            'user_id' => 1,
            'tracking_number' => Str::random(10),
            'status' => 'EN Cours',
            'crbt_amount' => 3000.00,
            'colis_count' => 99,
            'destination' => 'kenitra',
            'deposit_date' => now()->subDays(5),
            'status_date' => now()->subDays(2),
            'payment_date' => now(),
        ]);
    }
}
