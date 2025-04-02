<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::prefix('/product')->name('POST.')->group(function () {
    // Route::get('/all', [PostController::class, "findAll"])->name('FINDALL');
    Route::resource('/', ProductsController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});


Route::get('/', function () {
    return view('welcome');
});
