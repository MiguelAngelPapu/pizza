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
            // Salsas básicas (sin costo adicional)
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
            ],
            [
                'id' => 4,
                'name' => 'Napolitana',
                'price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ],
            
            // Salsas premium (con costo adicional)
            [
                'id' => 5,
                'name' => 'Pesto',
                'price' => 5500,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 6,
                'name' => 'Alfredo (blanca)',
                'price' => 4500,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 7,
                'name' => 'Ají picante colombiano',
                'price' => 2800,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 8,
                'name' => 'Hogao colombiano',
                'price' => 3200,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 9,
                'name' => 'Rosada',
                'price' => 2500,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 10,
                'name' => ' Queso azul',
                'price' => 6900,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 11,
                'name' => 'Champiñones',
                'price' => 4800,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 12,
                'name' => 'Salsa de la casa',
                'price' => 3900,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('sauces')->insert($sauces);
    }
}
