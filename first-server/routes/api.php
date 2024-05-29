<?php

use App\Http\Controllers\PostController;
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
});