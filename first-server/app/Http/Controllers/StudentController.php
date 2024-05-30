<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Http\Resources\Student\StudentResource;
use App\Http\Resources\Student\StudentCollection;
use App\Http\Requests\Student\StoreStudent;
use App\Http\Requests\Student\UpdateStudent;


class StudentController extends Controller
{

    public function index()
    {
        $list = Student::all();
        return [
            'data' => new StudentCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreStudent $request)
    {
        $data = $request->validated();
        $student = Student::create($data);
        return [
            'data' => new StudentResource($student),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Student $student)
    {
        return [
            'data' => new StudentResource($student),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateStudent $request, Student $student)
    {
        $data = $request->validated();
        $student->update($data);
        return [
            'data' => new StudentResource($student),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }

}

