<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'class', 'avatar', 'powerschool_id', 'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Set the user's powerschool id.
     *
     * @param string $id
     */
    public function setPowerschoolIdAttribute($id)
    {
        $this->attributes['powerschool_id'] = empty($id) ? NULL : $id;
    }
}
