<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PostController extends Controller
{
    //
    public function showIndividualPost($id){
        return view('post/show')->withPost(\App\Post::with('hasManyComments')->find($id));
    }
}
