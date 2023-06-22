@extends('layouts.app')

@section('content')
    <div id="root"></div>
    here's some more content
@endsection

@section('scripts')
    <script src="{{ asset('js/admin/app.js') }}" defer></script>

@endsection