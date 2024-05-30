<?php

namespace App\Http\Requests\Bibliotheque;

use Illuminate\Foundation\Http\FormRequest;

class StoreBibliotheque extends FormRequest
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
            'title' => ['required','string','max:255'],
            'type' => ['required','in:book,report'],
            'date_prise' => ['required','date'],
            'date_retour' => ['nullable','date','after_or_equal:date_prise'],
            'user_id' => ['required','exists:users,id'],
        ];
    }
}
