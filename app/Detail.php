<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    //
    // protected $fillable = ['first_name', 'last_name', 'email_address', 'mobile_number', 'gender', 'date_of_birth', 'comments'];
    protected $fillable = ['first_name', 'email_address', 'comments'];
}
