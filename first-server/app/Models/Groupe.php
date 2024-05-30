<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groupe extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'niveau', 'specialite_id'];

    public function specialite()
    {
        return $this->belongsTo(Specialite::class);
    }

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
