<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ChooseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        
        // Datos para la tabla chooses
        $chooses = [
            [
                'id' => 1,
                'choose_category' => 'vegano',
                'name' => 'Piña',
                'price' => 2500,
                'description' => 'Trozos frescos de piña dulce',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'choose_category' => 'vegano',
                'name' => 'Jalapeños',
                'price' => 1900,
                'description' => 'Rodajas de jalapeño picante',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'choose_category' => 'vegano',
                'name' => 'Maíz dulce',
                'price' => 2200,
                'description' => 'Granos de maíz tierno y dulce',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 4,
                'choose_category' => 'pago',
                'name' => 'Pepperoni',
                'price' => 4500,
                'description' => 'Rodajas de pepperoni ahumado y picante',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 5,
                'choose_category' => 'vegano',
                'name' => 'Cebollas rojas',
                'price' => 1800,
                'description' => 'Aros de cebolla roja caramelizada',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 6,
                'choose_category' => 'pago',
                'name' => 'Anchoas',
                'price' => 5500,
                'description' => 'Filetes de anchoas importadas',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 7,
                'choose_category' => 'pago',
                'name' => 'Carne molida',
                'price' => 4800,
                'description' => 'Carne de res premium sazonada',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 8,
                'choose_category' => 'pago',
                'name' => 'Pollo Tikka',
                'price' => 5200,
                'description' => 'Trozos de pollo marinado al estilo hindú',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 9,
                'choose_category' => 'vegano',
                'name' => 'Champiñones',
                'price' => 2900,
                'description' => 'Champiñones frescos en rodajas',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 10,
                'choose_category' => 'pago',
                'name' => 'Atún',
                'price' => 5300,
                'description' => 'Trozos de atún en aceite de oliva',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 11,
                'choose_category' => 'doble_queso',
                'name' => 'Extra queso mozzarella',
                'price' => 4500,
                'description' => 'Capa adicional de queso mozzarella',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 12,
                'choose_category' => 'sin_gluten',
                'name' => 'Tofu',
                'price' => 4800,
                'description' => 'Cubos de tofu marinado, apto para celíacos',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 13,
                'choose_category' => 'gratis',
                'name' => 'Albahaca fresca',
                'price' => 0,
                'description' => 'Hojas de albahaca italiana fresca',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 14,
                'choose_category' => 'gratis',
                'name' => 'Orégano',
                'price' => 0,
                'description' => 'Orégano seco espolvoreado',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 15,
                'choose_category' => 'vegano',
                'name' => 'Aceitunas',
                'price' => 3200,
                'description' => 'Aceitunas negras en rodajas',
                'created_at' => $now,
                'updated_at' => $now
            ]
        ];
        
        // Insertar datos en la tabla
        DB::table('chooses')->insert($chooses);
    }
}
