<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('posts', PostController::class);

    // Admin-only routes
    Route::middleware('can:create-faculty')->group(function () {
        Route::post('/admin/create-faculty', [AdminController::class, 'createFaculty']);
        // You can add more admin-only routes here
    });
});
