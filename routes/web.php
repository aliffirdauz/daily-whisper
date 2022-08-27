<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/news/create', [NewsController::class, 'create'])->name('create.news');
    Route::post('/news', [NewsController::class, 'store'])->name('store.news');
    Route::get('/news', [NewsController::class, 'show'])->name('my.news');
    Route::get('/news/edit', [NewsController::class, 'edit'])->name('edit.news');
    Route::post('/news/update', [NewsController::class, 'update'])->name('update.news');
    Route::post('/news/delete', [NewsController::class, 'destroy'])->name('delete.news');
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
});

Route::get('/', [NewsController::class, 'index']);

require __DIR__.'/auth.php';
