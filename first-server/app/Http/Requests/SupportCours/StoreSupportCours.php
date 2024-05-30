<?php

namespace App\Http\Requests\SupportCours;

use Illuminate\Foundation\Http\FormRequest;

class StoreSupportCours extends FormRequest
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
            'fichier' => ['required', 'file', 'max:255'],
            'titre' => ['required', 'string', 'max:255'],
            'cours_id' => ['required', 'integer'],
        ];
    }
}
