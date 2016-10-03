<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

use App\Post;
use App\Comment;

class PostController extends Controller
{


    //
    public function showIndividualPost($id){
        if (!Auth::check() && Post::where('id', $id)->value('is_login') == 1) {
            return view('login_required')->withErrors('本主题需要登录后查看');
        }
        return view('post/show')->withPost(Post::with('hasManyComments')->find($id));
    }

    public function getReply(Request $request){

        if ($user = $request->user()){
            if (!$request->has('content')){
                return redirect()->back()->withInput()->withErrors('评论为空!');
            }
            if ($comment = Comment::create($request->all())){
                $comment->user_id = $user->id;
                if ($comment->save()) {
                    return redirect()->back();
                } else {
                    $comment->delete(); // 防止错误
                }
            }
        } else {
            return view('login_required')->withErrors('回复需要登录');
        }
        return redirect()->back()->withInput()->withErrors('评论发表失败！');

    }
}
