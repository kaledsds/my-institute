<?php

namespace App\Http\Requests\Semestre;

use Illuminate\Foundation\Http\FormRequest;

class StoreSemestre extends FormRequest
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
            'trim' =>['required','string','max:2'],
        ];
    }
}
