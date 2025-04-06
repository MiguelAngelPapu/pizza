<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chooses', function (Blueprint $table) {
            $table->id();
            $table->enum('choose_category', [
                'gratis',
                'pago',
                'vegano',
                'sin_gluten',
                'doble_queso'
            ])->default('pago')
              ->comment('Si se conoce que el estado es \'gratis\', su precio será 0 por defecto; de lo contrario, si pertenece a otra categoría, tendrá un precio específico.');
            $table->string('name');
            $table->float('price', 53, 0);
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chooses');
    }
};
