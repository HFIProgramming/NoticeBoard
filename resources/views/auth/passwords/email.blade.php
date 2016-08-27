@extends('layouts.app')

<!-- Main Content -->
@section('content')
    {{--    <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">Reset Password</div>
                        <div class="panel-body">
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif

                            <form class="form-horizontal" role="form" method="POST" action="{{ url('/password/email') }}">
                                {{ csrf_field() }}

                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" name="email"
                                               value="{{ old('email') }}">

                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <button type="submit" class="btn btn-primary">
                                            <i class="fa fa-btn fa-envelope"></i> Send Password Reset Link
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>--}}
    <div class="row">
        <div class="small-12 medium-6 medium-centered columns">
            <form method="post" action="{{ url('password/email') }}">
                <div class="form">
                    @if (count($errors))
                        <div class="alert callout">
                            <p><i class="icon icon-alert-circle-o"> Invalid email address.</i></p>
                        </div>
                    @endif
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