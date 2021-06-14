<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
 
class MenuController extends Controller
{
    public function index()
    {
        $menus = \App\Menu::all();
 
        return $menus->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'harga' => 'required',
          'gambar' => 'required',
          'deskripsi' => 'required'
        ]);
 
        $project = \App\Menu::create([
          'nama' => $validatedData['nama'],
          'harga' => $validatedData['harga'],
          'gambar' => $validatedData['gambar'],
          'deskripsi' => $validatedData['deskripsi'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Menu created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getMenu($id) // for edit and show
    {
        $menu = \App\Menu::find($id);
 
        return $menu->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'harga' => 'required',
          'gambar' => 'required',
          'deskripsi' => 'required'
        ]);
 
        $menu = \App\Menu::find($id);
        $menu->nama = $validatedData['nama'];
        $menu->harga = $validatedData['harga'];
        $menu->gambar = $validatedData['gambar'];
        $menu->deskripsi = $validatedData['deskripsi'];
        $menu->save();
 
        $msg = [
            'success' => true,
            'message' => 'Menu updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $menu = \App\Menu::find($id);
        if(!empty($menu)){
            $menu->delete();
            $msg = [
                'success' => true,
                'message' => 'Menu deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Menu deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}