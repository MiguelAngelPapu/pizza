<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// Agregar estos clases para ejecurtar la los Seeder en la base de datos
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            // Todos los productos
            [
                'id' => 'P002',
                'name' => 'Casa de Campo Fresca',
                'description' => 'Pimientos crujientes, champiñones suculentos y tomates frescos',
                'price' => 57000, // $14.25 USD
                'imageUrl' => '/assets/img/product1.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P003',
                'name' => 'Paneer Picante',
                'description' => 'Paneer en trozos con pimientos crujientes y chile rojo picante',
                'price' => 67000, // $16.75 USD
                'imageUrl' => '/assets/img/product2.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P004',
                'name' => 'Ola Verde Mexicana',
                'description' => 'Una pizza cargada con cebollas crujientes, pimientos, tomates jugosos',
                'price' => 80000, // $20.00 USD
                'imageUrl' => '/assets/img/product3.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P005',
                'name' => 'Paneer Picante',
                'description' => 'Paneer en trozos con pimientos crujientes y chile rojo picante',
                'price' => 67000, // $16.75 USD
                'imageUrl' => '/assets/img/product4.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P006',
                'name' => 'Ola Verde Mexicana',
                'description' => 'Una pizza cargada con cebollas crujientes, pimientos, tomates jugosos',
                'price' => 80000, // $20.00 USD
                'imageUrl' => '/assets/img/product5.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P007',
                'name' => 'Ola Verde Mexicana',
                'description' => 'Una pizza cargada con cebollas crujientes, pimientos, tomates jugosos',
                'price' => 80000, // $20.00 USD
                'imageUrl' => '/assets/img/product5.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P008',
                'name' => 'Ola Verde Mexicana',
                'description' => 'Una pizza cargada con cebollas crujientes, pimientos, tomates jugosos',
                'price' => 80000, // $20.00 USD
                'imageUrl' => '/assets/img/product5.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Entrantes
            [
                'id' => 'ST001',
                'name' => 'Pan de Ajo',
                'description' => 'Pan recién horneado cubierto con mantequilla de ajo, hierbas y una pizca de parmesano',
                'price' => 24000, // $5.99 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'ST002',
                'name' => 'Palitos de Mozzarella',
                'description' => 'Palitos de mozzarella empanizados crujientes servidos con salsa marinara',
                'price' => 30000, // $7.50 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'ST003',
                'name' => 'Alitas de Pollo',
                'description' => 'Jugosas alitas de pollo bañadas en tu salsa favorita: búfalo, BBQ o miel con ajo',
                'price' => 39800, // $9.95 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Asiática
            [
                'id' => 'AS001',
                'name' => 'Rollos Primavera de Verduras',
                'description' => 'Rollos crujientes rellenos de repollo, zanahorias y champiñones, servidos con salsa de chile dulce',
                'price' => 26000, // $6.50 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'AS002',
                'name' => 'Satay de Pollo',
                'description' => 'Brochetas de pollo a la parrilla marinadas en especias exóticas, servidas con salsa de maní',
                'price' => 37000, // $9.25 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Plancha, asados y parrilla
            [
                'id' => 'PR001',
                'name' => 'Ribeye a la Parrilla',
                'description' => 'Bistec ribeye de 340g a la parrilla a tu gusto, servido con verduras asadas y papas fritas',
                'price' => 99800, // $24.95 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'PR002',
                'name' => 'Pollo Asado',
                'description' => 'Medio pollo asado con hierbas y ajo, servido con papas al romero',
                'price' => 66000, // $16.50 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Clásica
            [
                'id' => 'CL001',
                'name' => 'Margarita Clásica',
                'description' => 'Pizza tradicional con salsa de tomate, mozzarella fresca, hojas de albahaca y aceite de oliva',
                'price' => 51800, // $12.95 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'CL002',
                'name' => 'Pepperoni',
                'description' => 'Salsa de tomate, queso mozzarella y rodajas de pepperoni',
                'price' => 55000, // $13.75 USD
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('products')->insert($products);
    }
}
