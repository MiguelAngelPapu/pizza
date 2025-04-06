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
                'name' => 'Style 1',
                'image_url' => '/assets/img/topping-style.png',
                'price' => 0, // Agregué precio ya que es requerido en la migración
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => 'Style 2',
                'image_url' => '/assets/img/topping-style2.png',
                'price' => 0, // Agregué precio ya que es requerido en la migración
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('toppings')->insert($toppings);
    }
}
