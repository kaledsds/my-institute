<?php



namespace App\Http\Controllers;

use App\Http\Resources\Bibliotheque\BibliothequeResource;
use App\Http\Resources\Bibliotheque\BibliothequeCollection;
use App\Http\Requests\Bibliotheque\StoreBibliotheque;
use App\Http\Requests\Bibliotheque\UpdateBibliotheque;
use App\Models\Bibliotheque;

class BibliothequeController extends Controller
{
    public function index()
    {
        $list = Bibliotheque::all();
        return [
            'data' => new BibliothequeCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreBibliotheque $request)
    {
        $data = $request->validated();
        $bibliotheque = Bibliotheque::create($data);
        return [
            'data' => new BibliothequeResource($bibliotheque),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Bibliotheque $bibliotheque)
    {
        return [
            'data' => new BibliothequeResource($bibliotheque),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateBibliotheque $request, Bibliotheque $bibliotheque)
    {
        $data = $request->validated();
        $bibliotheque->update($data);
        return [
            'data' => new BibliothequeResource($bibliotheque),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Bibliotheque $bibliotheque)
    {
        $bibliotheque->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}

