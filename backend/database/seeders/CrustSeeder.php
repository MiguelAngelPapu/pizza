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
                'extra_price' => 0,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => 'Corteza italiana',
                'extra_price' => 4000,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('crusts')->insert($crusts);
    }
}
