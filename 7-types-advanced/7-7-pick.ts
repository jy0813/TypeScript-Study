{
    type Video = {
        id:string;
        title:string;
        url:string;
        data:string;
    }

    // 원하는 것만 골라서 type 설정 가능
    type VideoMetadata = Pick<Video, 'id' | 'title'>

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