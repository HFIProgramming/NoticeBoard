@extends('layouts.app')

@section('title')
    Login
@endsection

@section('header')
    <link rel="stylesheet" href="{{ elixir('assets/css/login.css') }}">
@endsection

@section('content')
    {{--TODO Add frontend validation via Foundation Abide--}}
    <div class="row">
        <div class="small-12 medium-6 medium-centered columns">
            <form method="post" action="{{ url('/login') }}">
                <div id="login-form" class="row column">
                    @if (count($errors))
                        <div class="alert callout">
                            <p><i class="fi-alert"></i> Incorrect email or password.</p>
                        </div>
                    @endif
                    {{ csrf_field() }}
                    <h4 class="text-center">Log in with your email account</h4>
                    <input type="email" placeholder="Email" name="email" value="{{ old('email') }}">
                    <input type="password" placeholder="Password" name="password">
                    <input id="remember-me" type="checkbox" name="remember">
                    <label for="remember-me" class="checkbox">Remember me</label>
                    <p>
                        <button type="submit" class="button ink expanded">Log In</button>
                    </p>
                    <p class="text-center"><a href="{{ url('/password/reset') }}">Forgot your password?</a></p>
                </div>
            </form>
        </div>
    </div>
@endsection
