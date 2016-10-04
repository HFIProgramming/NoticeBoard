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
        return view('post/show')->withPost(Post::with('hasManyComments','tagged')->find($id));
    }

    public function getReply(Request $request){

        if ($user = $request->user()) {
            if (!$request->has('content')) {
                return redirect()->back()->withInput()->withErrors('评论为空!');
            }
            if ($comment = new Comment()) {
                $comment->user_id = $user->id;
                $comment->content = $request->content;
                $comment->post_id = $request->post_id;
                if (!$comment->save()) {
                    return redirect()->back()->withInput()->withErrors('评论发表失败!');
                }
                $post = Post::where('id', $request->post_id)->first();
                $post->last_user = $user->id;
                if (!$post->save()) {
                    return redirect()->back()->withInput()->withErrors('更新状态失败!');
                }
                return redirect()->back();
            } else {
                return view('login_required')->withErrors('回复需要登录');
            }
        }
    }

    public function createSite(){
        return view('post/create');
    }

    public function createNewPost(Request $request)
    {
        if ($user = $request->user()){
            if (!$request->has('content')){
                return redirect()->back()->withInput()->withErrors('内容为空!');
            }
            if ($post = new Post()){
                $post->user_id = $user->id;
                $post->content = $request->content;
                $post->title = $request->title;
                $post->save(); // tags need post id !
                $post->tag($request->tags);
                if ($post->save()) {
                    return redirect()->back();
                } else {
                    $post->delete(); // 防止错误
                }
            }
        } else {
            return view('login_required')->withErrors('发表需要登录');
        }
        return redirect()->back()->withInput()->withErrors('帖子发表失败！');

    }

}
