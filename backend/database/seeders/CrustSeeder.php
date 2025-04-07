<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CrustSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        
        // Datos para la tabla crusts
        $crusts = [
            [
                'id' => 1,
                'name' => 'Corteza clásica',
                'price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => 'Corteza italiana',
                'price' => 4000,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'name' => 'Corteza delgada',
                'price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 4,
                'name' => 'Rellena de queso',
                'price' => 6500,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 5,
                'name' => 'Corteza integral',
                'price' => 3000,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 6,
                'name' => 'Corteza sin gluten',
                'price' => 8000,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 7,
                'name' => 'Corteza de pan',
                'price' => 2500,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('crusts')->insert($crusts);
    }
}
