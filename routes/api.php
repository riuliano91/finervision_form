<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('projects', 'DetailController@index');
Route::post('projects', 'DetailController@store');
// Route::get('projects/{id}', 'DetailController@show');
// Route::put('projects/{project}', 'DetailController@markAsCompleted');
// Route::post('tasks', 'TaskController@store');
// Route::put('tasks/{task}', 'TaskController@markAsCompleted');
