<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');


// 认证路由...
Route::auth();
Route::get('/logout', 'Auth\AuthController@getLogout');

// 注册路由...
Route::get('/register', 'Auth\AuthController@getRegister');
Route::post('/register', 'Auth\AuthController@postRegister');

//帖子...
Route::get('/post/{id}', 'PostController@showIndividualPost');
Route::post('comment', 'PostController@getReply');
Route::post('/post', 'PostController@createNewPost');
Route::get('/post', 'PostController@createSite');

//板块划分
Route::get('/section', 'SectionController@showAllSections');
Route::get('/section/{section}', 'SectionController@showIndividualSection');

//个人中心
Route::get('/profile', 'UserController@showMyself');
Route::get('/profile/{nickname}', 'UserController@showSpecificProfile');

