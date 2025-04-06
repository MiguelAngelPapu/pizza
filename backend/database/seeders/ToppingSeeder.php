<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class ToppingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        
        // Datos para la tabla toppings
        $toppings = [
            [
                'id' => 1,
                'name' => 'Clásico Italiano',
                'image_url' => '/assets/img/topping-style.png',
                'price' => 5900, // Precio en pesos colombianos
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => 'Extra Queso',
                'image_url' => '/assets/img/topping-style2.png',
                'price' => 7500, // Precio en pesos colombianos
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'name' => 'Pepperoni',
                'image_url' => '/assets/img/topping-style4.png',
                'price' => 6500,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 4,
                'name' => 'Jamon',
                'image_url' => '/assets/img/topping-style6.png',
                'price' => 4900,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 5,
                'name' => 'Champiñones',
                'image_url' => '/assets/img/topping-style3.png',
                'price' => 3900,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('toppings')->insert($toppings);
    }
}
