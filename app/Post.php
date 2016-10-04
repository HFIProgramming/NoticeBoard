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

    public function getAuthor()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function getLast_user()
    {
        return $this->belongsTo('App\User', 'last_user', 'id');
    }

}
