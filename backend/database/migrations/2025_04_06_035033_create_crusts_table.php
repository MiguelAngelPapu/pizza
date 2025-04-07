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
        Schema::create('crusts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->float('price', 53, 0)
            ->default(0)
            ->comment('Precio extra por la cubierta seleccionada. Este valor adicional se debe a que la cubierta requiere un tipo de preparación diferente, lo que incrementa los costos del producto.');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crusts');
    }
};
