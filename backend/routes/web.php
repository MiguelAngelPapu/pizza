<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CatalogsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\SizesController;
use App\Http\Controllers\CrustsController;
use App\Http\Controllers\ToppingsController;
use App\Http\Controllers\SaucesController;
use App\Http\Controllers\ChooseController;

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

Route::prefix('/size')->name('SIZES.')->group(function () {
    Route::resource('/', SizesController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});

Route::prefix('/crust')->name('CRUST.')->group(function () {
    Route::resource('/', CrustsController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});

Route::prefix('/topping')->name('TOPPINGS.')->group(function () {
    Route::resource('/', ToppingsController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});


Route::prefix('/sauce')->name('SAUCES.')->group(function () {
    Route::resource('/', SaucesController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});


Route::prefix('/choose')->name('CHOOSES.')->group(function () {
    Route::resource('/', ChooseController::class)->parameters(['' => 'id'])->names([
        'show' => 'SHOW',
        'index' => 'INDEX',
        'store' => 'STORE',
        'update' => 'UPDATE',
        'destroy' => 'DELETE'
    ]);
});
