<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name', 'last_name', 'birthday', 'adress', 'email',
        'specialite_id', 'groupe_id', 'phone'
    ];

    public function specialite()
    {
        return $this->belongsTo(Specialite::class);
    }

    public function groupe()
    {
        return $this->belongsTo(Groupe::class);
    }
}
