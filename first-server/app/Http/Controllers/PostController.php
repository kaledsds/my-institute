<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\StorePost;
use App\Http\Requests\Post\UpdatePost;
use App\Http\Resources\Post\PostCollection;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list = Post::all();
        return [
            'data' => new PostCollection($list),
            'message' => 'Resource list',
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePost $request)
    {
        $data = $request->validated();
        $author = auth()->user();
        $data['author_id'] = $author->id;
        $post = Post::create($data);
        return [
            'data' => new PostResource($post),
            'message' => 'Resource has been created successfully',
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return [
            'data' => new PostResource($post),
            'message' => 'Resource details',
        ];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePost $request, Post $post)
    {
        $data = $request->validated();
        $res = $post->update($data);
        return [
            'data' => new PostResource($post),
            'message' => 'Resource has been updated successfully',
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $res = $post->delete($post);
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
