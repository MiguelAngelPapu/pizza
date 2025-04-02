<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

// Agregar estos clases para ejecurtar la los Seeder en la base de datos
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => "Starters",
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => "Asian",
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => "Plancha & roasts & grills",
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => "Classic",
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];
        DB::table('categories')->insert($categories);
    }
}
