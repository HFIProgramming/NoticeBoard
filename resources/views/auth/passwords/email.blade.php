@extends('layouts.app')

<!-- Main Content -->
@section('content')
    <div class="row">
        <div class="small-12 medium-6 medium-centered columns">
            @if (session('status'))
                <div class="alert callout">
                    <p><i class="icon icon-alert-circle-o"> {{ session('status') }}</i></p>
                </div>
            @endif
            <form method="post" action="{{ url('password/email') }}">
                <div class="form">
                    {{ csrf_field() }}
                    <h4>Reset password</h4>
                    <input type="email" placeholder="Email" name="email" value="{{ old('email') }}">
                    <button type="submit" class="button ink expanded">
                        <i class="icon icon-mail-send"></i> Send password reset link
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection