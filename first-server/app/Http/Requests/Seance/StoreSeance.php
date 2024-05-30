<?php

namespace App\Http\Requests\Seance;

use Illuminate\Foundation\Http\FormRequest;

class StoreSeance extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'jour' => ['required', 'string', 'max:255'],
            'heure_debut' => ['required', 'string', 'max:255'],
            'heure_fin' => ['required', 'string', 'max:255'],
            'groupes_id' => ['required', 'integer'],
            'matieres_id' => ['required', 'integer'],
            'teacher_id'=> ['required', 'integer'],
            'salles_id' => ['required', 'integer'],
        ];
    }
}
