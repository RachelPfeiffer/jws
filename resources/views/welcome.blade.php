@extends('layouts.app')

@section('content')
    <div id="home-jumbotron"></div>
    <div id="home-courses"></div>
    <div id="home-camps"></div>
    <div id="home-about"></div>
    <div id="home-company"></div>
@endsection

@section('scripts')
    <script src="{{ asset('js/app.js') }}" defer></script>
@endsection
