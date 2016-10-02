<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{


    //
    public function showIndividualPost($id){
        if (!Auth::check() && \App\Post::where('id', $id)->value('is_login') == 1) {
            return view('login_required')->withErrors('本主题需要登录后查看');
        }
        return view('post/show')->withPost(\App\Post::with('hasManyComments')->find($id));
    }

    public function getReply(Request $request){

        if ($user = $request->user()){
            if (\App\Comment::create($request->all(), ['user_id' => $user->id ])){
                return redirect()->back();
            } else {
                return redirect()->back()->withInput()->withErrors('评论发表失败！');
            }
        } else {
            return view('login_required')->withErrors('回复需要登录');
        }

    }
}
