<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SupportCours;
use App\Http\Resources\SupportCours\SupportCoursCollection;
use App\Http\Resources\SupportCours\SupportCoursResource;
use App\Http\Requests\SupportCours\StoreSupportCours;
use App\Http\Requests\SupportCours\UpdateSupportCours;
class SupportCoursController extends Controller
{
    public function index()
    {
        $list = SupportCours::all();
        return [
            'data' => new SupportCoursCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreSupportCours $request)
    {
        $data = $request->validated();
        $supportCours = SupportCours::create($data);
        return [
            'data' => new SupportCoursResource($supportCours),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(SupportCours $supportCours)
    {
        return [
            'data' => new SupportCoursResource($supportCours),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateSupportCours $request, SupportCours $supportCours)
    {
        $data = $request->validated();
        $supportCours->update($data);
        return [
            'data' => new SupportCoursResource($supportCours),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(SupportCours $supportCours)
    {
        $supportCours->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
