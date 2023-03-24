<?php

namespace App\Http\Controllers;

use App\Models\Art;
use App\Models\Category;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;

class ArtController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return inertia('Arts/Index',[
            'arts'=>Art::with('user', 'category')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Art $art)
    {
        $users=User::all();
        $categories=Category::all();
        return inertia('Arts/Create',[
            "art"=>$art,
            "users"=>$users,
            "categories"=>$categories
]);



//        return inertia('Arts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $art = new Art();

        $art->artName = $request->artName;
        $art->user_id = $request->user_id;
        $art->category_id = $request->category_id;
        $art->price = $request->price;
        $art->save();
        return to_route('arts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Art $art)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Art $art)
    {
            $users=User::all();
            $categories=Category::all();
        return inertia('Arts/Edit',[
            "art"=>$art,
            "users"=>$users,
            "categories"=>$categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Art $art)
    {
        $art->artName = $request->artName;
        $art->user_id = $request->user_id;
        $art->category_id = $request->category_id;
        $art->price = $request->price;
        $art->save();
        return to_route('arts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Art $art)
    {
        $art->delete();
        return to_route('arts.index');
    }
}
