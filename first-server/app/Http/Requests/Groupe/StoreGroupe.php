<?php

namespace App\Http\Requests\Groupe;

use Illuminate\Foundation\Http\FormRequest;

class StoreGroupe extends FormRequest
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
            'nom' => ['required', 'string', 'max:255'],
            'niveau' => ['required|in:1 CAP,2 CAP,1 BTP,2 BTP,1 BTS,2 BTS'],
            'specialite_id' => ['required', 'exists:specialites,id'],
        ];
    }
}
