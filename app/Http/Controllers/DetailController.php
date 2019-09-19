<?php

namespace App\Http\Controllers;

use App\Detail;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    //
    public function index() {
		$projects = Detail::all();

		return $projects->toJson();
	}

	public function store(Request $request) {
		$validatedData = $request->validate([
		  'email_address' => 'required',
		  'first_name' => 'required',
		  'last_name' => 'required',
		  'mobile_number' => 'required|regex:/(07)[0-9]{9}/',
		  'gender' => 'required',
		  'date_of_birth' => 'required|date_format:d/m/Y',
		  'comments' => '',
		]);

		$project = Detail::create([
		  'email_address' => $validatedData['email_address'],
		  'first_name' => $validatedData['first_name'],
		  'last_name' => $validatedData['last_name'],
		  'mobile_number' => $validatedData['mobile_number'],
		  'gender' => $validatedData['gender'],
		  'date_of_birth' => $validatedData['date_of_birth'],
		  'comments' => $validatedData['comments'],
		]);

		return response()->json('Project created!');
	}

	public function show($id) {
		$projects = Project::where('id', $id)
                            ->get();

		return $project->toJson();
	}

	public function markAsCompleted(Detail $project) {
		$project->is_completed = true;
		$project->update();

		return response()->json('Project updated!');
	}
}
