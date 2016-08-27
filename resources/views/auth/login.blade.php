@extends('layouts.app')

@section('title')
    Login
@endsection

{{--@section('header')
    <link rel="stylesheet" href="{{ elixir('css/login.css') }}">
@endsection--}}

@section('content')
    {{--TODO Add frontend validation via Foundation Abide--}}
    <div class="row">
        <div class="small-12 medium-6 medium-centered columns">
            <form method="post" action="{{ url('/login') }}">
                <div class="form">
                    @if (count($errors))
                        <div class="alert callout">
                            <p><i class="icon icon-alert-circle-o"></i> Incorrect email or password.</p>
                        </div>
                    @endif
                    <h4 class="text-center">Log in with email account</h4>

                    {{ csrf_field() }}
                    <input type="email" placeholder="Email" name="email" value="{{ old('email') }}">
                    <input type="password" placeholder="Password" name="password">
                    <input id="remember-me" type="checkbox" name="remember">
                    <label for="remember-me" class="checkbox">Remember me</label>
                    <button type="submit" class="button ink expanded">Log In</button>

                    <p class="text-center"><a href="{{ url('/password/reset') }}">Forgot password?</a></p>
                </div>
            </form>
        </div>
    </div>
@endsection
