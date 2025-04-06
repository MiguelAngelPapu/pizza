<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

// Agregar estos clases para ejecurtar la los Seeder en la base de datos
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MenusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            // Pizzas Clásicas (id: 1)
            [
                'product_id' => 'CL001',
                'category_id' => 1, // Pizzas Clásicas
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'CL002',
                'category_id' => 1, // Pizzas Clásicas
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'P002',
                'category_id' => 1, // Pizzas Clásicas
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Pizzas Gourmet (id: 2)
            [
                'product_id' => 'P003',
                'category_id' => 2, // Pizzas Gourmet
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'P004',
                'category_id' => 2, // Pizzas Gourmet
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'P007',
                'category_id' => 2, // Pizzas Gourmet
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Pizzas Vegetarianas (id: 3)
            [
                'product_id' => 'P005',
                'category_id' => 3, // Pizzas Vegetarianas
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'P006',
                'category_id' => 3, // Pizzas Vegetarianas
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'P008',
                'category_id' => 3, // Pizzas Vegetarianas
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Especialidades (id: 4)
            [
                'product_id' => 'ST001',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'ST002',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'ST003',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'AS001',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'AS002',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'PR001',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 'PR002',
                'category_id' => 4, // Especialidades
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('menus')->insert($menus);
    }
}
