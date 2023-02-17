{
    type Video = {
        id:string;
        title:string;
        url:string;
        data:string;
    }

    // 원하는 것만 뺄수있음.
    type VideoMetadata = Omit<Video, 'url' | 'data'>

    function getVideo(id:string):Video {
        return {
            id,
            title:'video',
            url:'https://',
            data:'byte-data'
        }
    }

    function getVideoMetadata(id:string):VideoMetadata {
        return {
            id:id,
            title:'title'
        }
    }
}