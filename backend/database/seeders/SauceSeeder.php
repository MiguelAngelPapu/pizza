<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SauceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        
        // Datos para la tabla sauces
        $sauces = [
            [
                'id' => 1,
                'name' => 'BBQ',
                'price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => 'Tomate',
                'price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'name' => 'Hierba con ajo',
                'price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('sauces')->insert($sauces);
    }
}
