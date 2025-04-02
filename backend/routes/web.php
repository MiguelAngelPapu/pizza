<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CatalogsController;
use App\Http\Controllers\CategoriesController;

Route::prefix('/product')->name('PRODUCTS.')->group(function () {
    Route::resource('/', ProductsController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});

Route::prefix('/catalogs')->name('CATALOGS.')->group(function () {
    Route::resource('/', CatalogsController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
    Route::get('/category/{categoryId}', [CatalogsController::class, 'getProductsByCategory'])
    ->name('PRODUCTS_BY_CATEGORY');
});

Route::prefix('/category')->name('CATEGORIES.')->group(function () {
    Route::resource('/', CategoriesController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});
