<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self'; font-src 'self' data:; img-src 'self' data: ">

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2d89ef">
    <meta name="msapplication-TileImage" content="/mstile-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta name="format-detection" content="telephone=no">

    <title>@yield('title') - NoticeBoard</title>
    <link rel="stylesheet" href="{{ elixir('css/material-foundation.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">

    <script src="{{ elixir('js/foundation.js') }}" async></script>
    @yield('header')
</head>
<body>
    <div data-sticky-container>
        <div class="top-bar" id="top-bar">
            <a href="{{ url('/') }}"><img src="/assets/images/logo.png" alt="NoticeBoard" id="logo"></a>
            <div class="top-bar-right">
                <ul class="menu">
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                    @else
                        <li>
                            <button class="button" type="button" data-toggle="notifications-dropdown">
                                <i class="icon icon-notifications"></i>
                            </button>
                            <div class="dropdown-pane" id="notifications-dropdown" data-dropdown data-auto-focus="true">
                                <ul>
                                    <!-- TODO actual notifications -->
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button class="button" type="button" data-toggle="options-dropdown">
                                <!-- TODO avatar -->
                            </button>
                            <div class="dropdown-pane" id="options-dropdown" data-dropdown data-auto-focus="true">
                                <ul>
                                    <li><a href="{{ url('/me') }}">Your profile</a></li>
                                    <li><a href="{{ url('/logout') }}">Log out</a></li>
                                    <!-- TODO actual options -->
                                </ul>
                            </div>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </div>

    @yield('content')
</body>
</html>
