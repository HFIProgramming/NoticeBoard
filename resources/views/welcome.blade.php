@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome</div>

                <div class="panel-body">
                    @foreach ($posts as $post)
                        <li style="margin: 50px 0;">
                            <div class="title">
                                <a href="{{ url('post/'.$post->id) }}">
                                    <h4>{{ $post->title}}</h4>
                                </a>
                                <h4>author: {{ $post->author->name }}</h4>
                                <h5>tags: {{ $post->tags }}</h5>
                            </div>
                            <div class="body">
                                <p>{{ $post->content }}</p>
                            </div>
                        </li>
                    @endforeach
                </div>

            </div>
        </div>
    </div>
</div>
@endsection
