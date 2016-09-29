<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function author()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

}
