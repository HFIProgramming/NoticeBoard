<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{$post->title}} - NoticeBoard</title>

    <link href="//cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <script src="//cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>

<div id="content" style="padding: 50px;">

    <h4>
        <a href="/"><< 返回首页</a>
    </h4>

    <h1 style="text-align: center; margin-top: 50px;">{{ $post->title }}</h1>
    <hr>
    <div id="date" style="text-align: right;">
       updated at: {{ $post->updated_at }}
    </div>
    <div id="post_author" style="text-align: right;">
        author:{{ $post->getAuthor->name }}
    </div>
    @foreach ($post->tags as $tag)
    <div id="post_tags" style="text-align: right;">
            <h6>tags:{{$tag->name}}</h6>
    </div>
    @endforeach
    <div id="content" style="margin: 20px;">
        <p>
            {{ $post->content }}
        </p>
    </div>

    <div id="comments" style="margin-top: 50px;">

        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>操作失败</strong> 输入不符合要求<br><br>
                {!! implode('<br>', $errors->all()) !!}
            </div>
        @endif

            @can('comment', $post)
        <div id="new">
            <form action="{{ url('comment') }}" method="POST">
                {!! csrf_field() !!}
                <input type="hidden" name="post_id" value="{{ $post->id }}">
                <div class="form-group">
                    <label>Content</label>
                    <textarea name="content" id="newFormContent" class="form-control" rows="10" placeholder="Share?" required="required"></textarea>
                </div>
                <button type="submit" class="btn btn-lg btn-success col-lg-12">Submit</button>
            </form>
        </div>
                @else
                <h5>如需回复请先<a href=/login>登录</a></h5>
            @endcan
        <script>
            function reply(a) {
                var nickname = a.parentNode.parentNode.firstChild.nextSibling.getAttribute('data');
                var textArea = document.getElementById('newFormContent');
                textArea.innerHTML = '@'+nickname+' ';
            }
        </script>

        <div class="conmments" style="margin-top: 100px;">
            <div class="counts" type="hidden" value="{{$count = 1}}"></div>
            @foreach ($post->hasManyComments as $comment)

                <div class="one" style="border-top: solid 20px #efefef; padding: 5px 20px;">
                    <div class="nickname" data="{{ $comment->author->name }}">
                        <h6>{{ $comment->created_at }}</h6>
                    </div>
                    <h6>{{$count ++}}楼</h6>
                    </div>
                    <div class="content">
                        <p style="padding: 20px;">
                            {{ $comment->content }}
                        </p>
                    </div>
                <div class="reply" style="text-align: right; padding: 5px;">
                        <a href="#new" onclick="reply(this);">回复</a>
                    </div>
                </div>

            @endforeach
        </div>
    </div>

</div>

</body>
</html>