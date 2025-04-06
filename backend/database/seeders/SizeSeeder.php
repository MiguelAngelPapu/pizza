<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        
        // Datos para la tabla sizes
        $sizes = [
            [
                'id' => 1,
                'name' => 'Personal',
                'slice_area' => 62.2,
                'slices' => 4,
                'price' => 11900,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => 'Mediana',
                'slice_area' => 76.4,
                'slices' => 6,
                'price' => 25900,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'name' => 'Grande',
                'slice_area' => 83.2,
                'slices' => 8,
                'price' => 35900,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 4,
                'name' => 'Familiar',
                'slice_area' => 92.1,
                'slices' => 10,
                'price' => 50900,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('sizes')->insert($sizes);
    }
}
