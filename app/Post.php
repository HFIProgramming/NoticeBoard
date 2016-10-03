<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Post extends Model
{
    use \Conner\Tagging\Taggable;
    //
    public function hasManyComments()
    {
        return $this->hasMany('App\Comment', 'post_id', 'id');
    }

    public function author()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function getLastComment()
    {
        return $this->hasMany('App\Comment', 'post_id', 'id');
    }

}
