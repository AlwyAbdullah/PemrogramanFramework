<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Menu
Route::get('/menus', 'MenuController@index');
Route::post('/menu/store', 'MenuController@store');
Route::get('/menu/edit/{id}', 'MenuController@getMenu');
Route::get('/menu/{id}', 'MenuController@getMenu');
Route::put('/menu/{id}', 'MenuController@update');
Route::delete('/menu/delete/{id}', 'MenuController@delete');

//Reservasi
Route::get('/reservasi', 'ReservasiController@index');
Route::post('/reservasi/store', 'ReservasiController@store');
Route::delete('/reservasi/delete/{id}', 'ReservasiController@delete');

