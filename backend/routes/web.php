<?php

use Illuminate\Support\Facades\Route;

Route::get('/app/{any}', function () {
    return file_get_contents(public_path('angular/index.html'));
})->where('any', '.*');


Route::get('/', function () {
    return view('welcome');
});
