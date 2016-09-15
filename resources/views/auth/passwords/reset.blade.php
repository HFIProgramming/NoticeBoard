@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="small-12 medium-6 medium-centered columns">
            @if (count($errors))
                <div class="alert callout">
                    Invalid email or password.
                </div>
            @endif
            <h4>Reset password</h4>
            <form method="post" action="{{ url('password/reset') }}">
                {{ csrf_field() }}
                <input type="hidden" name="token" value="{{ $token }}">
                <input type="email" placeholder="Email" name="email" value="{{ $email or old('email') }}">
                <input type="password" placeholder="Password" name="password">
                <input type="password" placeholder="Password confirmation" name="password_confirmation">
                <button class="button ink expanded">
                    <i class="icon icon-refresh"></i> Reset Password
                </button>
            </form>
        </div>
    </div>
@endsection
