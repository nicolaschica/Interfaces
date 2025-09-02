<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\LibroController; // ✅ Agregado

Route::get('/prueba', function () {
    return response()->json(['mensaje' => '¡API funcionando correctamente!']);
});

// Rutas API REST para clientes
Route::apiResource('clientes', ClienteController::class);
Route::apiResource('productos', ProductoController::class);
Route::apiResource('pedidos', PedidoController::class);

// Rutas de reservas (si aún las necesitas)
Route::get('/reservas', [ReservaController::class, 'index']);
Route::post('/reservas', [ReservaController::class, 'store']);

// ✅ Rutas para libros
Route::get('/libros', [LibroController::class, 'index']);
Route::get('/libros/{id}', [LibroController::class, 'show']);
Route::post('/libros', [LibroController::class, 'store']);
Route::put('/libros/{id}', [LibroController::class, 'update']);
Route::delete('/libros/{id}', [LibroController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});