<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\SpecialiteController;
use App\Http\Controllers\GroupeController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return [
            'data' => $request->user(),
            'message' => 'success',
        ];
    });
    Route::apiResource('/posts', PostController::class);
    Route::apiResource('/groupes', GroupeController::class);
    Route::apiResource('/specialites', SpecialiteController::class);
    Route::apiResource('/students', StudentController::class);
});
