<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReservasiController extends Controller
{
    public function index()
    {
        $reservasi = \App\Reservasi::all();
 
        return $reservasi->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'kursi' => 'required',
          'tanggal' => 'required'
        ]);
 
        $project = \App\Reservasi::create([
          'nama' => $validatedData['nama'],
          'kursi' => $validatedData['kursi'],
          'tanggal' => $validatedData['tanggal'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Reservasi created successfully!'
        ];
 
        return response()->json($msg);
    }

    public function delete($id)
    {
        $resrvasi = \App\Reservasi::find($id);
        if(!empty($resrvasi)){
            $resrvasi->delete();
            $msg = [
                'success' => true,
                'message' => 'Reservasi deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Reservasi deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
