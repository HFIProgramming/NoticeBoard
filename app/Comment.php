<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['content', 'post_id', 'club_post_type', 'tags', 'title'];
    //
    public function post()
    {
        return $this->belongsTo('App\Post', 'id');
    }

    public function author()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

}
