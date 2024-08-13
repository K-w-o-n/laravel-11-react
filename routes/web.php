<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{something}', function() {
    return view('welcome');
})->where('something',".*");
